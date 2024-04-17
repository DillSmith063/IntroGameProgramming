import "../components/KeyboardComponent.js"
import "../prefabs/EnemyGameObject.js"

class MainScene extends Scene {
    constructor() {
        super("gray")
    }

    start(ctx){
        let circleGameObject = new GameObject("CircleGameObject")
        circleGameObject.addComponent(new Circle())
        circleGameObject.addComponent(new KeyboardComponent())
        GameObject.instantiate(circleGameObject, 300, 300, 50)
        console.log("Circle has been drawn")

        GameObject.instantiate(new EnemyGameObject(), 200, 400, 50)
        console.log("Enemy has been drawn")
    }
}

window.MainScene = MainScene