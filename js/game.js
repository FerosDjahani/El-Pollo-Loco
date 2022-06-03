let canvas;
let world;
let keyboard = new Keyboard();
AUDIO_music = new Audio('audio/music.mp3');
AUDIO_musicnext = new Audio('audio/nextmusic.mp3');
AUDIO_jump = new Audio('audio/jump.mp3');




function init() {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('startfull').classList.add('d-none');
    document.getElementById('NewGame').classList.add('d-none');
    document.getElementById('header').classList.add('d-none');

    canvas = document.getElementById('canvas');

    world = new World(canvas, keyboard);


    console.log('My Charackter is', world.character);

}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
        AUDIO_jump.play();
    }

    if (e.keyCode == 68) {
        keyboard.D = true;

    }



});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 68) {
        keyboard.D = false;
    }


});



function touchDownLeft() {
    keyboard.LEFT = true;
}

function touchUpLeft() {
    keyboard.LEFT = false;
}

function touchDownRight() {
    keyboard.RIGHT = true;
}

function touchUpRight() {
    keyboard.RIGHT = false;
}


function touchDownJump() {
    keyboard.SPACE = true;
}

function touchUpJump() {
    keyboard.SPACE = false;
}

function touchDownThrow() {
    keyboard.D = true;
}

function fullscreen() {
    canvas.requestFullscreen();
}

function touchUpThrow() {
    keyboard.D = false;
}

function music() {
    this.AUDIO_music.play();

}

function music2() {
    this.AUDIO_musicnext.play();

}

function Info() {
    document.getElementById('infoBox').classList.remove('d-none');
}

function start() {
    document.getElementById('NewGame').classList.remove('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('start').classList.add('d-none');
    document.getElementById('startfull').classList.remove('d-none');
    document.getElementById('infoBox').classList.add('d-none');
    document.getElementById('header').classList.remove('d-none');
    document.getElementById('left').classList.remove('d-none');
    document.getElementById('right').classList.remove('d-none');
    document.getElementById('jump').classList.remove('d-none');
    document.getElementById('throw').classList.remove('d-none');
    initLevel();


}



function Restart() {
    reload();
    document.getElementById('NewGame').classList.remove('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('startfull').classList.remove('d-none');
    document.getElementById('start').classList.add('d-none');



}


function closeInfo() {

    document.getElementById('infoBox').classList.add('d-none');
}

function reload() {
    window.location = 'index.html';

}