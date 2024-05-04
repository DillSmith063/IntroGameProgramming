import "../components/ButtonComponent.js"
import "../components/FollowMouseComponent.js"
import "../prefabs/ButtonPrefab.js"
import "../prefabs/PointPrefab.js"
import "../prefabs/RectanglePrefab.js"

class MainScene extends Scene {
    constructor() {
        super("gray")
    }

    start(ctx){
        let button1 = new ButtonPrefab(1)
        GameObject.instantiate(button1, 300, 200, 50, 50)

        let button2 = new ButtonPrefab(2)
        GameObject.instantiate(button2, 600, 200, 50, 50)

        let button3 = new ButtonPrefab(3)
        GameObject.instantiate(button3, 900, 200, 50, 50)

        let button4 = new ButtonPrefab(4)
        GameObject.instantiate(button4, 1200, 200, 50, 50)

        let button5 = new ButtonPrefab(5)
        GameObject.instantiate(button5, 1500, 200, 50, 50)

        GameObject.instantiate(new RectanglePrefab(), 300, 200, 75, 75);
        GameObject.instantiate(new RectanglePrefab(), 600, 200, 75, 75);
        GameObject.instantiate(new RectanglePrefab(), 900, 200, 75, 75);
        GameObject.instantiate(new RectanglePrefab(), 1200, 200, 75, 75);
        GameObject.instantiate(new RectanglePrefab(), 1500, 200, 75, 75);

        GameObject.instantiate(new PointPrefab())
    }
    
}

window.MainScene = MainScene