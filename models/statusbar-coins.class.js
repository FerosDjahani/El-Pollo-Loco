class StatusbarCoins extends DrawableObject {
    IMAGES = [
        './img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        './img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        './img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        './img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        './img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        './img/7.Marcadores/Barra/Marcador moneda/azul/100_.png'
    ];


    amount = 0;


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setAmount(0);
        this.x = 20;
        this.y = 120;
        this.width = 150;
        this.height = 50;
    }

    setAmount(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    // collect item options


    resolveImageIndex() {
        if (this.amount == 0) {
            return 0;
        } else if (this.amount == 1) {
            return 1;
        } else if (this.amount == 2) {
            return 2;
        } else if (this.amount == 3) {
            return 3;
        } else if (this.amount == 4) {
            return 4;
        } else {
            return 5;
        }
    }
}