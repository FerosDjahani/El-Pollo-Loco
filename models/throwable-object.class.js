//Bottle animation options

class ThrowableObject extends MovableObject {

    AUDIO_broke = new Audio('audio/broke.mp3');

    IMAGES_ROTATE = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',

    ];

    IMAGES_SPLASH = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png',
    ];

    constructor(x, y) {
        super();
        this.loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.loadImages(this.IMAGES_ROTATE);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }

    throw () {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {

            if (this.isAboveGround()) {
                this.x += 10;

            }
        }, 25);

        this.playInterval = setInterval(() => {
            this.checksplashBottle();

        }, 100);

    }

    checksplashBottle() {

        if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_ROTATE);
        } else if (this.checkCollisionBottleAndEndboss()) {
            this.playAnimation(this.IMAGES_SPLASH);
        } else {
            this.playAnimation(this.IMAGES_SPLASH);
            this.AUDIO_broke.play();
            setTimeout(() => {
                clearInterval(this.playInterval);
            }, 400)
        }

        setTimeout(() => {
            if (this.playAnimation(this.IMAGES_SPLASH)) {

            }
        }, 1000)
    }

}