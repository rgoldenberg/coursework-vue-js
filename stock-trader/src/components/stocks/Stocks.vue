<template>
    <div>
        <app-stock 
            v-for="stock in stocks"
            :stock="stock"
            :key="stock.id"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        data() {
            return {
                stocks: [
                    {id: 1, name: 'Amazon', price: 250},
                    {id: 2, name: 'Google', price: 200},
                    {id: 3, name: 'Apple', price: 150},
                    {id: 4, name: 'Microsoft', price: 100},
                ]
            };
        },
        components: {
            appStock: Stock   
        }
    }
</script>
