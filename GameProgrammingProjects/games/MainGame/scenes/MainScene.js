import "../components/KeyboardComponent.js"
import "../prefabs/EnemyGameObject.js"
import "../prefabs/PlayerGameObject.js"
import "../prefabs/HealthupGameObject.js"
import "../prefabs/SpeedUpGameObject.js"
import "../prefabs/RectanglePrefab.js"

class MainScene extends Scene {
    constructor() {
        super("gray")
        this.aspectRatio = 1
        this.logicalWidth = 20
    }

    start(ctx){
        
        GameObject.instantiate(new PlayerGameObject, 500, 500, 50)

        GameObject.instantiate(new RectanglePrefab(), 1200, 200, 75, 75)
        
        GameObject.instantiate(new RectanglePrefab(), 300, 200, 75, 75)

        GameObject.instantiate(new HealthUpGameObject(), 1200, 200, 50, 50)

        GameObject.instantiate(new SpeedUpGameObject(), 300, 200, 50, 50)

        
    }
}

window.MainScene = MainScene