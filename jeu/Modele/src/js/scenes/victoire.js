class victoire extends Phaser.Scene {
    constructor() {
      super({ key: 'victoire' });
    }
  
    preload() {
      this.load.image('fondEcran', 'asset/War2.png'); 
      this.load.image('boutonQuitter', 'asset/retour.png'); 
    }
  
    create() {
      this.fondEcran = this.add.image(800,300,"fondEcran");
      this.boutonQuitter = this.add.image(800, 250, 'boutonQuitter');
      this.boutonQuitter.setInteractive();
  
      this.boutonQuitter.on('pointerdown', () => {
        this.scene.start('Accueil'); 
      });
    }
  
    update() {}
  }
  