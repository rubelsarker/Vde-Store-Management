<template>
    <nav class="navbar navbar-light " style="background-color: #e3f2fd;">
        <router-link :to="{path:'/'}" class="navbar-brand">MyStore</router-link>
        <form @submit.prevent="search" class="form-inline">
            <input v-model="keyword" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </nav>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Navbar",
        data(){
            return{
                keyword:''
            }
        },
        methods:{
            search(){
              let self = this;
              axios.get('http://localhost:3000/search/'+this.keyword).then(response => {
                 self.$store.commit('setInventory',response.data)
              })
            }
        }
    }
</script>

<style scoped>

</style>