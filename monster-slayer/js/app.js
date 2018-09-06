new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameRunning: false
    },
    methods: {
        startGame: function() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.isGameRunning = true;
        }
    }
});