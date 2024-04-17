class Scene {
    gameObjects = []
    hasStarted = false

    constructor(backgroundColor){
        this.backgroundColor = backgroundColor
        this.hasStarted = false
    }

    _start(ctx){
        if(!this.hasStarted){
            this.hasStarted = true
        }

        if(this.start){
            this.start(ctx)
        }

        for(const gameObject of this.gameObjects){
            if(gameObject.start){
                gameObject.start(ctx)
            }
        }
    }

    update(ctx){
        for(const gameObject of this.gameObjects){
            if(gameObject.update){
                gameObject.update(ctx)
            }
        }
    }

    draw(ctx){
        ctx.fillStyle = this.backgroundColor
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        //ctx.save()
        //ctx.translate(-Camera.main.transform.x, -Camera.main.transform.y)

        let sortedGameObjects = [...this.gameObjects]
        sortedGameObjects = sortedGameObjects.sort((a, b) => a.layer - b.layer)

        for(const gameObject of this.gameObjects){
            if(gameObject.layer == -1){
                ctx.filter = "blur(2px)"
            } else {
                ctx.flter = "none"
            }

            if(gameObject.draw){
                gameObject.draw(ctx)
            }
        }
    }
}

window.Scene = Scene