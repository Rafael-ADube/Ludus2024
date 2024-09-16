class Jeu extends Phaser.Scene {
    constructor() {
        super({ key: 'Jeu' });
      }
    
    preload() {
       this.load.image('fondEcran', 'asset/War2.png'); 
        this.load.image('boutonQuitter', 'asset/retour.png'); 
        this.load.image('boutonRecommencer', 'asset/recommencer.png');
        
    }
  
    create() {
        this.fondEcran = this.add.image(800,300,"fondEcran");
        this.boutonRecommencer = this.add.image(800,200, 'boutonRecommencer');
        this.boutonRecommencer.setInteractive();
        this.boutonQuitter = this.add.image(800, 250, 'boutonQuitter');
        this.boutonQuitter.setInteractive();



     this.boutonQuitter.on('pointerdown', () => {
      this.scene.start('accueil');
    });

    this.boutonRecommencer.on('pointerdown', () => {
      this.scene.start('accueil');
    });

    }
  
    update() {
  
    }
  }
  