import Caveman from "./CavemanClass.js"

export default class BigmouthEnemy extends Caveman{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        this.pointValue = 2000;

        this.health = 1;

        this.lungeDistance = 100;
        this.lungeDistanceShort = 80;
        this.lungeHeight = -180;
        this.lungeHeightShort = -120;
        this.shortLunge = false;

        this.lungeInterval = 1250;
        this.curentLungeInterval = 0;

        //set true when the player sees it, then it starts moving
        this.hasBeenSpotted = false;

        //resize hitbox facing left
        this.trueSizeX = 14;
        this.trueSizeY = 26;
        this.trueOffsetX = 9;
        this.trueOffsetY = 6;

        //resize hitbox facing right
        this.falseSizeX = 14;
        this.falseSizeY = 26;
        this.falseOffsetX = 9;
        this.falseOffsetY = 6;
    }

    preUpdate(time, deltaTime){
        super.preUpdate(time, deltaTime);

        if(!this.hasBeenSpotted){
            this.checkIfOnScreen();
        }else{
            this.manageJumpingAround(deltaTime)
        }
    }

    callbackFunction(){
        this.setCollideWorldBounds(true);
        this.flipX = true;
        this.anims.play("bigmouth-idle", true)
        this.resizeHitbox();

        this.checkIfOnScreen()
    } 

    manageJumpingAround(deltaTime){
        if(this.body.blocked.down || this.body.touching.down){
            this.setVelocity(0, 0)
            this.anims.play("bigmouth-idle", true)
            this.curentLungeInterval += deltaTime;

            if(this.levelOver){
                return;
            }

            if(this.curentLungeInterval >= this.lungeInterval && !this.scene.player.isDead){
                this.curentLungeInterval = 0;
                
                let distance = 0;
                let height = 0;

                if(this.shortLunge){
                    distance = this.lungeDistanceShort;
                    height = this.lungeHeightShort;
                    this.shortLunge = false;
                }else{
                    distance = this.lungeDistance;
                    height = this.lungeHeight;
                    this.shortLunge = true;
                }

                if(this.isPlayerToTheLeftOfEnemy()){


                    this.flipX = true;
                    this.setVelocity(-distance, height)
                }else{
                    this.flipX = false;
                    this.setVelocity(distance, height)
                }
            }
        }else{
            this.anims.play("bigmouth-walk", true)
        }
    }
}