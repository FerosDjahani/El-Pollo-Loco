//enboss health bar instructions

class StatusBarEndboss extends DrawableObject {
    IMAGES_ENEMYHEALTH = [
        'img/7.Marcadores/Barra/Marcador vida/Naranja/0_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/20__1.png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/40_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/60_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/80_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/100_ .png'
    ]


    percentage = 100;



    constructor() {
        super();
        this.loadImages(this.IMAGES_ENEMYHEALTH);
        this.x = 550;
        this.y = 0;
        this.width = 150;
        this.height = 50;
        this.setPercentage(100);
    }



    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_ENEMYHEALTH[this.resolveImageIndex()];
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

            return 0;

        }


    }
}