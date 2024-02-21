class Scene {
    gameObjects = []
    constructor(backgroundColor){
        this.backgroundColor = backgroundColor
    }

    update(){
        for(const gameObject of this.gameObjects){
            if(gameObject.update){
                gameObject.update()
            }
        }
    }

    draw(ctx){
        ctx.fillStyle = this.backgroundColor
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        for(const gameObject of this.gameObjects){
            if(gameObject.draw){
                gameObecjt.draw(ctx)
            }
        }
    }
}