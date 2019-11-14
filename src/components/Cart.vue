<template>
    <ul class="list-group">
        <li class="list-group-item bg-dark" style="color: #fff;">
            <span>Name</span>
            <span class="float-right">Price</span>
        </li>
        <br>
        <li v-for="(item,index) in items" :key="index" class="list-group-item bg-info" style="color: #fff;">
            <span @click="removeItem(index)" class="btn btn-sm btn-danger mr-1">x</span>
            <span>{{ item.title }}</span>
            <span class="float-right">${{ item.price }}</span>
        </li>
        <br>

        <li class="list-group-item bg-warning" style="color: #fff;">
            <span>Total</span>
            <span class="float-right">${{ totalPrice }}</span>
        </li>
        <li v-if="items.length > 0" class="list-group-item " style="color: #fff;">
            <button @click="checkout" class="btn btn-success btn-block">Checkout</button>
        </li>

    </ul>
</template>

<script>
    export default {
        name: "Cart",
        computed:{
            items(){
                return this.$store.getters.getCart
            },
            totalPrice(){
                let total = 0;
                this.items.forEach(item => {
                    total += parseFloat(item.price)
                });
                return total.toFixed(2);
            }
        },
        methods:{
            removeItem(index){
                this.$store.commit('removeItem', index)
            },
            checkout(){
                if(confirm('Are you sure want to checkout?')){
                    this.$store.commit('clearCart')
                }
            }
        }
    }
</script>

<style scoped>

</style>