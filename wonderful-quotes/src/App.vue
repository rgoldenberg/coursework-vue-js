<template>
    <div class="container">
        <app-header 
            :quoteCount="quotes.length"
            :maxQuotes="maxQuotes"></app-header>
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
    import Header from './components/Header.vue';

    export default {
        data() {
            return {
                quotes: ['Carthago Delenda Est'],
                maxQuotes: 10
            };
        },
        methods: {
            addNewQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    alert(`Maximum number of quotes is ${this.maxQuotes}!`);
                    return;
                }
                this.quotes.push(quote);
            },
            deleteQuote(idx) {
                this.quotes.splice(idx, 1);
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        }
    }
</script>

<style>
</style>
