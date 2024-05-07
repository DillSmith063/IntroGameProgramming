class BlankComponent extends Component {
  constructor(x, y, name = "BlankComponent"){
    super(name)
    this.x = x
    this.y = y
    EventSystem.registerListener(this)
  }

  handleEvent(event){
    /*if(event.name == "Play"){
      if(this.x == event.args[0] && this.y == event.args[1]){
  
        let buttonState = MainScene.model.getAt(this.x, this.y)
        if(buttonState == ButtonModel.BLANK){
          const barHeight = 100;
          const margin = 15;
          const buttonSize = 20;
          let toAdd = new SafePrefab(this.x, this.y)
          GameObject.instantiate(toAdd, 
            this.x * barHeight + margin, 
            this.y * barHeight + margin, 
            buttonSize, 
            buttonSize)
          MainScene.model.setAt(this.x, this.y, ButtonModel.SAFE)
        } else if(buttonState == ButtonModel.FAIL){
          Engine.currentScene = new LoseScene()
        }
  
        console.log("destroy")
        GameObject.destroy(this.parent)

        let gameResult = MainScene.model.getGameResult()
        if(gameResult == ButtonModel.WIN){
          Engine.currentScene = new WinScene()
        }
      }
    }*/

    if(event.name == "Play"){
      if(this.x == event.args[0] && this.y == event.args[1]){
        let buttonState = MainScene.model.getAt(this.x, this.y)
        if(buttonState == ButtonModel.BLANK){
          const barHeight = 100;
          const margin = 15;
          const buttonSize = 20;
          let toAdd = new SafePrefab(this.x, this.y)
          GameObject.instantiate(toAdd, 
            this.x * barHeight / 3 + barHeight / 6 + margin, 
            this.y * barHeight / 3 + barHeight / 6 + margin, 
            buttonSize, 
            buttonSize)
          MainScene.model.setAt(this.x, this.y, ButtonModel.SAFE)
        } else if(buttonState == ButtonModel.FAIL){
          Engine.currentScene = new LoseScene()
        }
  
        console.log("destroy")
        GameObject.destroy(this.parent)
  
        let gameResult = MainScene.model.getGameResult()
        if(gameResult == ButtonModel.WIN){
          Engine.currentScene = new WinScene()
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