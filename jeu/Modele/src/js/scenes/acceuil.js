class Acceuil extends Phaser.Scene {
  constructor() {
      super({ key: 'accueil' });
    }
  
  preload() {
      this.load.image('fondEcran', 'asset/War2.png'); 
      this.load.image('logo', 'asset/logo.png');
      this.load.image('boutonCommencer', 'asset/jouer.png'); 
      this.load.image('boutonCredit', 'asset/credit.png'); 
      this.load.image('boutonComment', 'asset/commentjouer.png'); 
      this.load.image('boutonSon', 'asset/son.png');
      
  }

  create() {
  this.fondEcran = this.add.image(800,300,"fondEcran");
  this.logo = this.add.image(800,100,'logo').setScale(3.0)

  
      


  this.boutonCommencer = this.add.image(800, 250, 'boutonCommencer');
  this.boutonCommencer.setInteractive();
  this.boutonCredit = this.add.image(800, 320, 'boutonCredit');
  this.boutonCredit.setInteractive();
  this.boutonComment = this.add.image(800, 390, 'boutonComment');
  this.boutonComment.setInteractive();
  this.boutonSon = this.add.image (config.width,0,'boutonSon').setOrigin(1,0)
.setScale(0.2);

  this.boutonCommencer.on('pointerdown', () => {
    this.scene.start('Jeu');
  });

  
 
  this.boutonCredit.on('pointerdown', () => {
    this.scene.start('credit');
  });


  ;
  this.boutonComment.on('pointerdown', () => {
    this.scene.start('comment');
  });
  
  

  this.boutonSon.on('pointerdown', () => {
    this.scene.start('Acceuil');
  });




  
  }

  update() {

  }
}