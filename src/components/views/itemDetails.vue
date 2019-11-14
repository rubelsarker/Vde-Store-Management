<template>
    <div v-if="item" class="row">
        <div class="col-lg-4">
            <img :src="item.photo" :alt="item.title" class="img-fluid img-thumbnail">
        </div>
        <div class="col-lg-8">
            <div class="card">
                <div class="card-header">
                   <h3>Product Name: {{item.title}}</h3>
                </div>
                <div class="card-body text-justify text-muted">
                    {{item.description}}
                </div>
                <div class="card-footer text-center">
                    <a @click="addToCart(item)" class="btn btn-success float-left">+ADD</a>
                    <span class="badge badge-warning float-right" style="font-size: 24px">Price: ${{item.price}}</span>
                </div>
            </div>
        </div>
    </div>
    <h3 v-else>Loading...</h3>
</template>

<script>
    import axios from 'axios'
    export default {
       data(){
           return{
               item:null
           }
       },
        mounted(){
           this.fetchItem();
        },
        methods:{
           fetchItem(){
              let self = this;
              axios.get('http://localhost:3000/item/'+this.$route.params.id).then(response => {
                  self.item = response.data
              })
           },
            addToCart(item){
               this.$store.commit('addToCart', item)
            }
        }
    }
</script>

<style scoped>

</style>