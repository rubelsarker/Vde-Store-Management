<template>
        <div v-if="!loading" class="row">
            <div v-for="(item,index) in items" :key="index" class="col-lg-4">
                <div class="card">
                    <router-link :to="{path: '/item/' + item.id}" tag="div">
                        <img :src="item.photo" class="card-img-top" alt="image">
                    </router-link>
                    <div class="card-body">
                        <h5 class="text-center card-title">{{ item.title }}</h5>
                        <p style="display: block" class="text-center badge badge-warning ">${{ item.price }}</p>
                        <a @click="addToCart(item)" class="btn btn-block btn-success">+ADD</a>
                    </div>
                </div>
            </div>
        </div>
        <h1 v-else>Loading...</h1>

</template>

<script>
    import axios from'axios'
    export default {
        name: "Inventory",
        data(){
            return{
                loading:true,
            }
        },
        computed:{
            items(){
                return this.$store.getters.getInventory
            }
        },
        mounted(){
            this.fetchInventory()
        },
        methods:{
            addToCart(item){
               this.$store.dispatch('addToCart', item)
            },
            fetchInventory(){
                let self= this;
                axios.get('http://localhost:3000/items').then(response => {
                    self.$store.commit('setInventory', response.data)
                    self.loading = false
                })
            }
        }
    }

</script>

<style scoped>

</style>