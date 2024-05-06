class BlankComponent extends Component {
  constructor(x, y, name = "BlankComponent"){
    super(name)
    this.x = x
    this.y = y
    EventSystem.registerListener(this)
  }

  handleEvent(event){
    if(event.name == "Play"){
      if(this.x == event.args[0] && this.y ==  event.args[1]){
        console.log("destroy")
        GameObject.destroy(this.parent)

        let toAdd
        if(MainScene.model.getGameResult(this.x, this.y) == ButtonModel.IN_PROGRESS){
          toAdd = new SafePrefab(this.x, this.y)
        } else if(MainScene.model.getGameResult(this.x, this.y) == ButtonModel.WIN){
          Engine.currentScene = new WinScene()
        } else if(MainScene.model.getGameResult(this.x, this.y) == ButtonModel.LOSE){
          Engine.currentScene = new LoseScene()
        }
      }
    }
  }

  update(ctx){
    if (Input.mouseUpThisFrame) {
        let { x, y } = Input.mousePosition;
        if (Collisions.isPointRectangleCollision(
          { x, y },
          { x: this.transform.x, y: this.transform.y },
          this.transform.scaleX, this.transform.scaleY
        )) {
          console.log(this.x + ", " + this.y);
          EventSystem.fireEvent({
            origin: this,
            name: "Play",
            args: [this.x, this.y]
            })
        }
    }}
}

window.BlankComponent = BlankComponent;