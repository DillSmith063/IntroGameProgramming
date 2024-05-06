class BlankComponent extends Component {
  constructor(x, y, name = "BlankComponent"){
    super(name)
    this.x = x
    this.y = y
    this.buttonModel = new ButtonModel()
    EventSystem.registerListener(this)
  }

  handleEvent(event){
    if(event.name == "Play"){
        let [x, y] = event.args
        let result = this.buttonModel.getGameResult(x, y)
        if(result == ButtonModel.RESULT_WIN){
            Engine.currentScene = new WinScene()
        } else if(result == ButtonModel.RESULT_LOSE){
            Engine.currentScene = new LoseScene()
        } else {
            console.log("Game in progress")
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