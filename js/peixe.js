var config = {
    type: Phaser.AUTO,
    width: 800,
    height:600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixe;

function preload() {
    this.load.image('mar', 'assets/backgrounds/bg_azul-escuro.png');
    this.load.image('logo', 'assets/backgrounds/logo-inteli_branco.png');
    this.load.image('alga', 'assets/backgrounds/alga.png');
    this.load.image('peixe', 'assets/peixes/peixinho_roxo.png');
    
}

function create() {
    // adiciona o background
    this.add.image(400, 300, 'mar');
    // adiciona o logo do inteli
    this.add.image(400, 525, 'logo').setScale(0.5);
    // carrega a alga roxa
    this.add.image(200, 510, 'alga').setScale(0.1);    
    // carrega a alga roxa
    this.add.image(600, 510, 'alga').setScale(0.1);

    //guarda o peixe em uma variavel
    peixe = this.add.image(400, 300, 'peixe');
    //transforma a variavel 
    peixe.setFlip(true, false);
}
function update() {
    //controles do peixe
    peixe.x = this.input.x;
    peixe.y = this.input.y;
}