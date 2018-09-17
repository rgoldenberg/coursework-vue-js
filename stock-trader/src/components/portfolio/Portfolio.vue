<template>
    <div v-if="stocks.length > 0">
        <app-stock 
            v-for="stock in stocks"
            :key="stock.id"
            :stock="stock"></app-stock>
    </div>
    <div v-else>
        <h4>You have no Stocks in your Portfolio at the moment.</h4>
    </div>
</template>

<script>
import Stock from './Stock.vue';
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    },
    components: {
        appStock: Stock
    }
}
</script>
