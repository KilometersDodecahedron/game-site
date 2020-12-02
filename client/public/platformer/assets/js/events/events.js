const sceneEvents = new Phaser.Events.EventEmitter();

//stores the strings to access events
const eventNames = {
    playerDied: "playerDied",
    livesChanged: "livesChange",
    colorChanged: "livesChange",
    checkpointReached: "checkpointReached",
    coinCollected: "coinCollected",
    goalPostReached: "goalPostReached",

    //used to move player color between scenes
    needStartingColor: "needStartingColor",
    sendStartingColor: "sendStartingColor"
}

export {
    sceneEvents,
    eventNames
}