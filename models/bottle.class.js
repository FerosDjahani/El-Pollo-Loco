class Bottle extends DrawableObject {

    y = 390;
    width = 50;
    height = 50;

    constructor() {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.x = 400 + Math.random() * 1200;

    }

}