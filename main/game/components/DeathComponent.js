class DeathComponent extends Component {
    update() {
        let circleGameObject = currentScene.gameObjects.find(go => go.constructor.name == "CircleGameObject")
        
        if(Collisions.isCircleCircleCollision(circleGameObject.transform, this.parent.transform, 50, 50)) {
            currentScene = new DeadScene()
        }
    }
}