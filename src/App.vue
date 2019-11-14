<template>
  <div id="app">
    <!-- Navbar -->
      <navbar @search="search"></navbar>
    <!-- Main Section -->
    <div class="container-fluid mt-4">
      <div class='row'>
        <div class="col-lg-8">
            <!--Inventory-->
            <!--<inventory @newItemAdded="addCartItem" :items="items"></inventory>-->
            <router-view></router-view>
        </div>
        <div class="col-lg-4">
            <!--Cart-->
            <cart @itemRemoved="removeItem" :items="cart"></cart>
        </div>
      </div>
    </div>

      <!--<router-link :to="{path:'/'}">Home</router-link>-->
      <!--<router-link :to="{path:'/test/1'}">Test1</router-link>-->
      <!--<router-link :to="{path:'/test/2'}">Test2</router-link>-->
      <!--<router-link :to="{path:'/test/3'}">Test3</router-link>-->

  </div>

</template>

<script>
import Navbar from './components/Navbar'
import Cart from './components/Cart'
// import Inventory from './components/views/Inventory'
import data from './data'
export default {
    components:{
        Navbar,
        Cart,
        //Inventory
    },
    data(){
        return{
            items:[],
            cart:[]
        }
    },
    mounted() {
        this.items = data
    },
    methods:{
        addCartItem(item){
            this.cart.push(item)
        },
        removeItem(index){
            this.cart.splice(index, 1)
        },
        search(keyword){
            this.items = data.filter(item => {
               return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            })
        }
    }

}
</script>

<style>

</style>
