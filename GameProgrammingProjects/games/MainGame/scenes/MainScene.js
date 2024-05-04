import "../prefabs/Button.js"
import "../prefabs/RectanglePrefab.js"
import "../prefabs/PointPrefab.js"
import "../components/FollowMouseComponent.js"
import "../components/PlayComponent.js"
import "../components/ScoreUpdaterComponent.js"
import "../components/InputComponent.js"

class MainScene extends Scene {
    constructor() {
        super("gray")
    }

    start(ctx){
        // Instantiate buttons
        let button1 = new Button(1)
        button1.addComponent(new PlayComponent())
        button1.addComponent(new InputComponent())
        GameObject.instantiate(button1, 300, 200, 50, 50);

        let button2 = new Button(2)
        button2.addComponent(new PlayComponent())
        button2.addComponent(new InputComponent())
        GameObject.instantiate(button2, 600, 200, 50, 50);

        let button3 = new Button(3)
        button3.addComponent(new PlayComponent())
        button3.addComponent(new InputComponent())
        GameObject.instantiate(button3, 900, 200, 50, 50);

        let button4 = new Button(4)
        button4.addComponent(new PlayComponent())
        button4.addComponent(new InputComponent())
        GameObject.instantiate(button4, 1200, 200, 50, 50);

        let button5 = new Button(5)
        button5.addComponent(new PlayComponent())
        button5.addComponent(new InputComponent())
        GameObject.instantiate(button5, 1500, 200, 50, 50);

        GameObject.instantiate(new RectanglePrefab(), 300, 200, 75, 75);
        GameObject.instantiate(new RectanglePrefab(), 600, 200, 75, 75);
        GameObject.instantiate(new RectanglePrefab(), 900, 200, 75, 75);
        GameObject.instantiate(new RectanglePrefab(), 1200, 200, 75, 75);
        GameObject.instantiate(new RectanglePrefab(), 1500, 200, 75, 75);

        GameObject.instantiate(new PointPrefab())

        let scoreGameObject = new GameObject()
        scoreGameObject.addComponent(new Text("Score: ", "30px Papyrus", "cyan"))
        scoreGameObject.addComponent(new ScoreUpdaterComponent())
        GameObject.instantiate(scoreGameObject, 30, 30)
    }
}

window.MainScene = MainScene