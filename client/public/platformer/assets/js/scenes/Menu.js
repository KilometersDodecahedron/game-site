export default class Menu extends Phaser.Scene {
    constructor() {
        super('menu');
        this.Menubackground;
        this.title;
        this.play;
        this.scores;
    }
    
    create() {
        //background image
        this.Menubackground = this.add.image( 400, 280, "Menubackground");
        this.Menubackground.setScale(1.25,1.7)

        var titleBackground = this.add.rectangle(412, 42, 400, 60, 0xFFFF00);
        //title text
        var titleConfig={fontSize:'50px',color:'#000000',fontFamily: 'Arial'};
        this.title=this.add.text(2,.75,"DINO DYNASTY",titleConfig);
        this.title.setOrigin(-.6,-.25);

        //rectangle button place holders and text
        var r1 = this.add.rectangle(400, 200, 320, 110, 0x0000FF);
        var r2 = this.add.rectangle(400, 350, 320, 110, 0xff0000);
        //play button text
        var playConfig={fontSize:'40px',color:'#000000',fontFamily: 'Arial'};
        this.play=this.add.text(2,.75,"PLAY",playConfig);
        this.play.setOrigin(-3.5,-4);
        //highscores text
        var scoresConfig={fontSize:'40px',color:'#000000',fontFamily: 'Arial'};
        this.scores=this.add.text(2,.75,"HIGH SCORES",scoresConfig);
        this.scores.setOrigin(-.92,-7.43);
        r1.setInteractive();
        //FIRST LEVEL GOES HERE
        r1.on('pointerdown', () => { this.scene.start('tutorial');});
        r2.setInteractive();
        //making the ajax call to get High Score data to be passed into the next scene
        r2.on('pointerdown', () => { 
            $.ajax({
                url: "/api/users/",
                type: "GET",
                //set the "success" to fun in this context, to get the next scene
                context: this,
                success: function(highScoreArray) {
                    this.scene.start('scores', highScoreArray);
                }
            });
        });
    }
}