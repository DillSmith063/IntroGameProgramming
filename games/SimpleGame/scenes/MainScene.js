import "../components/BallAimComponent.js"
import "../components/CameraFollowerComponent.js"
import "../components/CloudMoverComponent.js"
import "../components/CloudGeneratorComponent.js"
import "../prefabs/BallPrefab.js"
import "../prefabs/CloudGameObject.js"
import "../prefabs/ControllerGameObject.js" 


class MainScene extends Scene {
  constructor() {
    super("#008DE2")
    this.aspectRatio = 1
    this.logicalWidth = 20
  }

  start(ctx) {
    let logicalHeight = this.logicalWidth / this.aspectRatio
    let cloudX = Math.random() * this.logicalWidth
    let cloudY = Math.random() * logicalHeight
    let cloudWidth = 20
    let cloudHeight = 20

    GameObject.instantiate(new ControllerGameObject())
    GameObject.instantiate(new CloudGameObject(), cloudX, cloudY, cloudWidth, cloudHeight)

    let groundGameObject = new GameObject("GroundGameObject")
    groundGameObject.addComponent(new Rectangle("brown", "transparent"))
    GameObject.instantiate(groundGameObject, 10, 15, 20, 10)

    let tankGameObject = new GameObject("TankGameObject")
    tankGameObject.addComponent(new Rectangle("blue", "transparent"))
    GameObject.instantiate(tankGameObject, 10, 10, 1, .5)
    
    let barrelGameObject = new GameObject("BarrelGameObject")
    barrelGameObject.addComponent(new Line(new Vector2(10,10),new Vector2(10, 9), "black", .1))
    barrelGameObject.addComponent(new BallAimComponent())
    GameObject.instantiate(barrelGameObject)
  }
    
      
}
window.MainScene = MainScene