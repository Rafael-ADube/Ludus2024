const config = {
    type: Phaser.AUTO,
    parent: "canvas-wrapper",
    width: 1600,
    height: 800,
    scene: [Acceuil, Jeu, comment, credit, terminer, victoire]
};
const game = new Phaser.Game(config);