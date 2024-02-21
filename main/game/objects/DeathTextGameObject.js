class DeathTextGameObject extends GameObject {
    update(){
        
    }

    draw(ctx){
        ctx.fillStyle = "red"
        ctx.font = "bold 60px Spectral"
        ctx.textAlign = "center"
        ctx.textBaseLine = "middle"

        let textX = ctx.canvas.width / 2
        let textY = ctx.canvas.height / 2 - 50

        ctx.fillText("You Have Perished", textX, textY)

        ctx.font = "bold 40px Spectral"
        ctx.textAlign = "center"
        ctx.textBaseLine = "middle"
        ctx.fillStyle = "red"
        ctx.fillText("Press Enter to Continue Your Journey", textX, textY + 100)
    }
}