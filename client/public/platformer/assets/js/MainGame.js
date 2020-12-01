import Preloader from "./scenes/Preloader.js";
import Game from "./scenes/PracticeScene.js";
import GameUI from "./scenes/GameUI.js";
import Dungeon from "./scenes/DungeonScene.js"

const config = {
    type: Phaser.AUTO,
    //TODO turn this back to 800, 560
    width: 800,
    height: 560,
    autoCenter: true,
    parent: 'mygame',
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 400 }
            ,debug: true
        }
    },

    scene: [
        Preloader,
        //make sure to load the game before the UI, so the UI goes above it
        Game,
        Dungeon,
        GameUI,
    ]
}

const game = new Phaser.Game(config);