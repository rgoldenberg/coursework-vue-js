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
        },
        attack: function() {
            this.monsterHealth -= calculateDamage(3, 10);
            this.processFightState(getFightState(this.monsterHealth, this.playerHealth));

            this.monsterAttacks();
        },
        specialAttack: function() {
            this.monsterHealth -= calculateDamage(10, 20);
            this.processFightState(getFightState(this.monsterHealth, this.playerHealth));

            this.monsterAttacks();
        },
        heal: function() {
            var healthHealed = this.playerHealth += 10;
            this.playerHealth = healthHealed > 100 ? 100 : healthHealed;
            this.monsterAttacks();
        },
        giveUp: function() {
            this.isGameRunning = false;
        },
        monsterAttacks: function() {
            this.playerHealth -= calculateDamage(5, 12);
            this.processFightState(getFightState(this.monsterHealth, this.playerHealth));
        },
        processFightState: function(state) {
            if (state === fightState.ONGOING) {
                return;
            }
            var message = state === fightState.PLAYER_WON ? "You won!" : "YOU DIED.";
            if (confirm(`${message} Start new game?`)) {
                this.startGame();
            } else {
                this.isGameRunning = false;
            }
        }
    }
});

var fightState = Object.freeze({
    PLAYER_WON: 0,
    MONSTER_WON: 1,
    ONGOING: -1
});

var getFightState = function(monsterHP, playerHP) {
    if (monsterHP <= 0) {
        return fightState.PLAYER_WON;
    } 
    if (playerHP <= 0) {
        return fightState.MONSTER_WON;
    }
    return fightState.ONGOING;
};

var calculateDamage = function(min, max) {
    return Math.max(Math.floor(Math.random() * max) + 1, min);
};