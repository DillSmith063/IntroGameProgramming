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
        document.addEventListener("keydown", Input.keydown)
        document.addEventListener("keyup", Input.keyup)

        setInterval(Engine.gameLoop, Time.ms)
    }
}