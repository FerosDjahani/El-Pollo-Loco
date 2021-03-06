class StatusbarBottles extends DrawableObject {

    IMAGES = [
        './img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        './img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        './img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        './img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        './img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        './img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png'
    ];

    amount = 0;


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setAmount(0);
        this.x = 20;
        this.y = 60;
        this.width = 150;
        this.height = 50;
    }


    setAmount() {
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