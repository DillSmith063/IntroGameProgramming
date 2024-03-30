import "../components/KeyboardComponent.js"

class MainScene extends Scene {
    constructor() {
        super("white")
    }

    start(ctx){
        let circleGameObject = new GameObject("CircleGameObject")
        circleGameObject.addComponent(new Circle())
        circleGameObject.addComponent(new KeyboardComponent())
        GameObject.instantiate(circleGameObject, 200, 400, 50)
    }
}

window.MainScene = MainScene
export default MainScene