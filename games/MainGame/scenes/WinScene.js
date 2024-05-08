class WinScene extends Scene{
    constructor(){
        super("green")
    }

    start(ctx){
        let scoreGameObject = new GameObject()
        scoreGameObject.addComponent(new Text("Score: ", "100px Papyrus", "white"))
        scoreGameObject.addComponent(new ScoreReaderComponent())
        this.gameObjects.push(scoreGameObject)
        scoreGameObject.transform.x = 750
        scoreGameObject.transform.y = 150

        let winTextGameObject = new GameObject()
        winTextGameObject.transform.x = 600
        winTextGameObject.transform.y = 300
        winTextGameObject.addComponent(new Text("You Win :)", "100px Papyrus", "white"))
        this.gameObjects.push(winTextGameObject)
    }
}

window.WinScene = WinScene