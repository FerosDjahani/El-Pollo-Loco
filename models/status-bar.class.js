//main Character health bar instructions


class Statusbar extends DrawableObject {
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png'

    ];

    // if character lose audio
    AUDIO_lost = new Audio('audio/lost.mp3');
    AUDIO_death = new Audio('audio/no.mp3');

    percentage = 100;



    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 20;
        this.y = 0;
        this.width = 150;
        this.height = 50;
        this.setPercentage(100);
    }



    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    // lose health options

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;

        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            this.AUDIO_lost.play();
            this.AUDIO_death.play();
            return 0;

        }


    }
}