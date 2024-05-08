class LoseScene extends Scene{
    constructor(){
        super("red")
    }

    start(ctx){
        let winTextGameObject = new GameObject()
        winTextGameObject.transform.x = 600
        winTextGameObject.transform.y = 300
        winTextGameObject.addComponent(new Text("You Lose :(", "100px Papyrus", "black"))
        this.gameObjects.push(winTextGameObject)
    }
}

window.LoseScene = LoseScene