<template>
    <div class="container">
        <app-new-quote @quoteAdded="addNewQuote"></app-new-quote>
        <app-quote-grid 
            :quotes="quotes"
            @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Pro Tip: Click on a Quote to delete it!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';

    export default {
        data() {
            return {
                quotes: ['Carthago Delenda Est'],
                maxQuotes: 10
            };
        },
        methods: {
            addNewQuote(quote) {
                this.quotes.push(quote);
            },
            deleteQuote(idx) {
                this.quotes.splice(idx, 1);
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        }
    }
</script>

<style>
</style>
