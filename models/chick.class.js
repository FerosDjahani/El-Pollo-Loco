class Chick extends MovableObject {
    y = 390;
    height = 60;
    width = 80;

    IMAGES_WALKING = [
        './img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        './img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        './img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
    ];

    IMAGES_DEAD = [
        './img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png'
    ];

    constructor() {
        super().loadImage('./img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png');
        this.x = 800 + Math.random() * 2000;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.05 + Math.random() * 0.5;
        this.animate();


    }



    kill() {
        super.kill();
    }




    animate() {
        setInterval(() => {
            if (!this.isDead()) {
                this.moveLeft();
            }

        }, 1000 / 60)

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }
}