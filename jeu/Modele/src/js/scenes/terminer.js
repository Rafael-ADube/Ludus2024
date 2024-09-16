class terminer extends Phaser.Scene {
    constructor() {
      super({ key: 'terminer' });
    }
  
    preload() {
      this.load.image('fondEcran', 'asset/War2.png'); 
      this.load.image('boutonRecommencer', 'asset/recommencer.png');
      this.load.image('boutonQuitter', 'asset/menu.png'); 
    }
  
    create() {
      this.fondEcran = this.add.image(800,300,"fondEcran");
      this.boutonRecommencer = this.add.image(800, 250, 'boutonRecommmencer');
      this.boutonRecommencer.setInteractive();
      this.boutonQuitter = this.add.image(800, 250, 'boutonQuitter');
      this.boutonQuitter.setInteractive();
  
      this.boutonQuitter.on('pointerdown', () => {
        this.scene.start('Accueil'); 
      });
      this.boutonRecommencer.on('pointerdown', () => {
        this.scene.start('Jeu'); 
      });
    }
  
    update() {}
  }
  