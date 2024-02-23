class Scene {
    gameObjects = []
    constructor(backgroundColor){
        this.backgroundColor = backgroundColor
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

        for(const gameObject of this.gameObjects){
            if(gameObject.draw){
                gameObject.draw(ctx)
            }
        }
    }
}