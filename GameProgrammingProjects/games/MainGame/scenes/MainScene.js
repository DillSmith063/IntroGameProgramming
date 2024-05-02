import "../prefabs/Button.js"
import "../prefabs/RectanglePrefab.js"
import "../prefabs/PointPrefab.js"
import "../components/AssignNumberComponent.js"
import "../components/FollowMouseComponent.js"

class MainScene extends Scene {
    constructor() {
        super("gray")
        this.aspectRatio = 1
        this.logicalWidth = 20
    }

    start(ctx){
        // Instantiate buttons
        GameObject.instantiate(new Button(), 300, 200, 50, 50);
        GameObject.instantiate(new Button(), 600, 200, 50, 50);
        GameObject.instantiate(new Button(), 900, 200, 50, 50);
        GameObject.instantiate(new Button(), 1200, 200, 50, 50);
        GameObject.instantiate(new Button(), 1500, 200, 50, 50);

        GameObject.instantiate(new RectanglePrefab(), 300, 200, 75, 75);
        GameObject.instantiate(new RectanglePrefab(), 600, 200, 75, 75);
        GameObject.instantiate(new RectanglePrefab(), 900, 200, 75, 75);
        GameObject.instantiate(new RectanglePrefab(), 1200, 200, 75, 75);
        GameObject.instantiate(new RectanglePrefab(), 1500, 200, 75, 75);

        GameObject.instantiate(new PointPrefab())

        // Instantiate an object with the AssignNumberComponent
        let assigner = new GameObject("Assigner");
        assigner.addComponent(new AssignNumberComponent());
        GameObject.instantiate(assigner);
    }
}

window.MainScene = MainScene