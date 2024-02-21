class Engine {
    static gameLoop() {
        let canvas = document.querySelector("#canv")
        let ctx = canvas.getContext("2d")

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    
        currentScene.update(ctx)
        currentScene.draw(ctx)
    }

    static setup() {
        document.addEventListener("keydown", keydown)
        document.addEventListener("keyup", keyup)

        setInterval(Engine.gameLoop, Time.ms)
    }
}