class Scene {
    constructor(){

    }
}

class Time {
    static ms = 20;
    static fps = 1000/Time.ms;
}

class Globals {
    static score = 0;
}

class MainScene extends Scene {
    constructor() {
        super()
        this.x = 0
        this.y = 0
    }

    update(ctx) {
        let speed = 100
    
        if (keysDownThisFrame.includes("ArrowLeft") || keysDownThisFrame.includes("KeyA")) {
            this.x -= speed / Time.fps
        }
    
        if (keysDownThisFrame.includes("ArrowRight") || keysDownThisFrame.includes("KeyD")) {
            this.x += speed / Time.fps
        }
    
        if (keysDownThisFrame.includes("ArrowUp") || keysDownThisFrame.includes("KeyW")) {
            this.y -= speed / Time.fps
        }
    
        if (keysDownThisFrame.includes("ArrowDown") || keysDownThisFrame.includes("KeyS")) {
            this.y += speed / Time.fps
        }
    
        if(keysDownThisFrame.includes("Space")){
            currentShape = currentShape === 'circle' ? 'rectangle' : 'circle'
        }
    
        Globals.score++
    
        if (this.x < 0 || this.x > ctx.canvas.width - 200 || this.y < 0 || this.y > ctx.canvas.height - 200) {
            currentScene = new DeadScene()
        }

        keysDownThisFrame = []
        keysUpThisFrame = []
    }

    draw(ctx) {
        ctx.fillStyle = "black"
        ctx.beginPath()
        ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fill()

        ctx.fillStyle = "gray"
        ctx.beginPath()
        ctx.rect(50, 50, ctx.canvas.width - 100, ctx.canvas.height - 100)
        ctx.fill()

        //create enemy "model"
        ctx.fillStyle = "white"
        ctx.strokeStyle = "red"
        ctx.beginPath();
        ctx.lineWidth = 5
        ctx.arc(500, 300, 50, 50, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        //create player "model"
        if(currentShape === 'circle'){
            ctx.beginPath();
            ctx.fillStyle = "black"
            ctx.strokeStyle = "red"
            ctx.lineWidth = 5
            ctx.arc(this.x + 100, this.y + 100, 50, 50, 0, Math.PI * 2)
            ctx.fill()
            ctx.stroke()
        } else if(currentShape === 'rectangle') {
            ctx.beginPath();
            ctx.fillStyle = "black"
            ctx.strokeStyle = "blue"
            ctx.lineWidth = 5
            ctx.fillRect(150 + this.x - 100, 150 + this.y - 100, 100, 100)
            ctx.strokeRect(150 + this.x - 100, 150 + this.y - 100, 100, 100)
        }
    }
}

class DeadScene extends Scene {
    constructor() {
        super()
        this.timeSinceDeath = 0
        this.showContinueMessage = false;
    }

    update() {
        this.timeSinceDeath += Time.ms
        if(this.timeSinceDeath > 2000 && !this.showContinueMessage) {
            this.showContinueMessage = true
        }

        if(keysDownThisFrame.includes("Enter")) {
            currentScene = new MainScene()
        }
    }

     draw(ctx) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        ctx.fillStyle = "red"
        ctx.font = "bold 60px Spectral"
        ctx.textAlign = "center"
        ctx.textBaseLine = "middle"

        let textX = ctx.canvas.width / 2
        let textY = ctx.canvas.height / 2 - 50

        ctx.fillText("You Have Perished", textX, textY)

        if(this.showContinueMessage) {
            ctx.font = "bold 40px Spectral"
            ctx.textAlign = "center"
            ctx.textBaseLine = "middle"
            ctx.fillStyle = "red"
            ctx.fillText("Press Enter to Continue Your Journey", textX, textY + 100)
        }
    }
}

let mainScene = new MainScene();
let deadScene = new DeadScene();

let currentScene = mainScene;

let keysDown = []
let keysDownThisFrame = []
let keysUpThisFrame = []
let currentShape = 'circle'

function gameLoop() {
    let canvas = document.querySelector("#canv")
    let ctx = canvas.getContext("2d")

    currentScene.update(ctx)
    currentScene.draw(ctx)
}

function keyup(e) {
    console.log(e)
    let index = keysDownThisFrame.indexOf(e.code)
    keysDownThisFrame.splice(index, 1)
}

function keydown(e) {
    console.log(e)
    if (!keysDownThisFrame.includes(e.code)) {
        keysDownThisFrame.push(e.code)
    }
}

function setup() {
    document.addEventListener("keydown", keydown)
    document.addEventListener("keyup", keyup)

    let canvas = document.querySelector('#canv')
    let ctx = canvas.getContext("2d")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

setup()

setInterval(gameLoop, Time.ms)