class DeathScene extends Scene {
    constructor() {
        super("green")
    }

    start() {
        let scoreGameObject = new GameObject()
        scoreGameObject.addComponent(new Text("Final Score: ", "30px Papyrus", "cyan"))
        scoreGameObject.addComponent(new ScoreReaderComponent())
        GameObject.instantiate(scoreGameObject, 300, 200)

        let lostTextGameObject = new GameObject()
        lostTextGameObject.addComponent(new Text("You Lost :(", "30px Papyrus", "cyan"))
        GameObject.instantiate(lostTextGameObject, 300, 400)
    }
}

window.DeathScene = DeathScene