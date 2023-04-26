<template>
    <div id="product-list-one">
        <h1>Product List One</h1>
        <ul>
            <li v-for="product in saleProducts">
                <span class="name">{{ product.name }}</span>
                <span>${{ product.price }}</span>
            </li>
        </ul>
    </div>
</template>
    
<script>
export default {
    // props: ['products'],
    computed: {
        //this product is fetched through store  where this is an array
        products() {
            return this.$store.state.products;
        },
        saleProducts(){
            return this.$store.getters.saleProducts;
        }
        // saleProducts() {
        //     var saleProducts = this.$store.state.products.map(product => {
        //         return {
        //             name: '**' + product.name + '**',
        //             price: product.price / 2
        //         }
               
        //     });
        //     return saleProducts;
        // },
    },
    data() {
        return {

        }
    }
}
</script>
<style></style>
    