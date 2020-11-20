import Enemy from "./EnemyClass.js"

export default class Caveman extends Enemy{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        this.health = 2;

        //resize hitbox facing left
        this.trueSizeX = 19;
        this.trueSizeY = 28
        this.trueOffsetX = 5;
        this.trueOffsetY = 5;

        //resize hitbox facing right
        this.falseSizeX = 19;
        this.falseSizeY = 28
        this.falseOffsetX = 5;
        this.falseOffsetY = 5;
    }

    callbackFunction(){
        this.setCollideWorldBounds(true);
        this.flipX = true;
    }

    resizeHitbox(){
        if(this.flipX){
            this.body.setSize(this.trueSizeX, this.trueSizeY)
                .setOffset(this.trueOffsetX, this.trueOffsetY);
        }else{
            this.body.setSize(this.falseSizeX, this.falseSizeY)
                .setOffset(this.falseOffsetX, this.falseOffsetY);
        }
    }
}