class SafePrefab extends GameObject{
    constructor(x,y,name="SafePrefab"){
      super(x,y,name)
      this.x = x
      this.y = y
      this.addComponent(new Rectangle("green"))
    }
  }
  
  window.SafePrefab = SafePrefab