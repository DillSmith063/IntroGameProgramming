class Scene {
    gameObjects = []
    hasStarted = false

    logicalWidth = -1
    aspectRatio = -1

    logicalViewWidthInPixels = -1
    logicalViewHeightInPixels = -1

    letterBox1End = -1
    letterBox2Start = -1 
    


    constructor(backgroundColor){
        this.backgroundColor = backgroundColor
        this.hasStarted = false
    }

    _start(ctx){
        if(!this.hasStarted){
            this.hasStarted = true
        
            if(this.start){
                this.start(ctx)
            }

            for(const gameObject of this.gameObjects){
                if(gameObject.start){
                    gameObject.start(ctx)
                }
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
         ctx.fillStyle = this.backgroundColor;
         ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
 
         ctx.save()
 
         /*let windowAspectRatio = ctx.canvas.height / ctx.canvas.width;
         let usingLogicalCoordinates = this.logicalWidth > 0 && this.aspectRatio > 0
 
         if (usingLogicalCoordinates) {
             if (this.aspectRatio > windowAspectRatio) {
                 this.letterBox1End = (ctx.canvas.width) / 2 - (ctx.canvas.height / this.aspectRatio) / 2;
                 this.letterBox2Start = (ctx.canvas.width) / 2 + (ctx.canvas.height / this.aspectRatio) / 2;
                 ctx.translate(this.letterBox1End, 0)
                 let scaleFactor = ctx.canvas.height / this.logicalWidth;
                 ctx.scale(scaleFactor, scaleFactor)
 
                 this.logicalWidthViewWidthInPixels = this.letterBox2Start - this.letterBox1End;
                 this.logicalWidthViewHeightInPixels = ctx.canvas.height;
             }
             else {
                 this.letterBox1End = (ctx.canvas.height) / 2 - (ctx.canvas.width * this.aspectRatio) / 2;
                 this.letterBox2Start = (ctx.canvas.width * this.aspectRatio) / 2 + (ctx.canvas.height) / 2;
                 ctx.translate(0, this.letterBox1End)
                 let scaleFactor = ctx.canvas.width / (this.logicalWidth / this.aspectRatio);
                 ctx.scale(scaleFactor, scaleFactor)
 
                 this.logicalWidthViewWidthInPixels = ctx.canvas.width;
                 this.logicalWidthViewHeightInPixels = this.letterBox2Start - this.letterBox1End;
             }
         }*/
 
         ctx.scale(Camera.main.transform.scaleX, Camera.main.transform.scaleY)
         ctx.translate(-Camera.main.transform.x, -Camera.main.transform.y)
 
         let sortedLayers = [...this.gameObjects]
         sortedLayers = sortedLayers.sort((a, b) => a.layer - b.layer)
 
         for (const gameObject of sortedLayers) {
             if (gameObject.layer == -1) {
                 ctx.filter = "blur(2px)"
             }
             else {
                 ctx.filter = "none"
             }
             if (gameObject.draw) {
                 gameObject.draw(ctx)
             }
 
         }

         ctx.restore()
 
         //ctx.fillStyle = "black"
 
         /*if (usingLogicalCoordinates) {
             if (this.aspectRatio > windowAspectRatio) {
 
                 ctx.fillRect(0, 0, this.letterBox1End, ctx.canvas.height);
                 ctx.fillRect(this.letterBox2Start, 0, ctx.canvas.width, ctx.canvas.height);
             }
             else {
                 ctx.fillRect(0, 0, ctx.canvas.width, this.letterBox1End);
                 ctx.fillRect(0, this.letterBox2Start, ctx.canvas.width, ctx.canvas.height);
             }
         }*/
 
         for (const gameObject of this.gameObjects) {
             if (gameObject.drawUI)
                 gameObject.drawUI(ctx);
         }
     }
 }
 
 window.Scene = Scene