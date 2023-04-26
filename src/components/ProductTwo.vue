<template>
    <div id="product-list-one">
        <h1>Product List Two</h1>
        <ul>
            <li v-for="vegetables in vegProducts">
                <span class="name">{{ vegetables.name }}</span>
                <span>${{ vegetables.price }}</span>
            </li>
        </ul>
    </div>
</template>
    
<script>
export default {
    // props: ['products'],
    computed: {
        vagetables(){
            return this.$store.state.vagetables;
        },
        vegProducts(){
return this.$store.getters.vegProducts;
            }
        },
    data() {
        return {

        }
    }
}
</script>
<style></style>
    