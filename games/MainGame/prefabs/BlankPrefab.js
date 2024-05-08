class BlankPrefab extends GameObject {
    constructor(x, y, name = "BlankPrefab") {
      super(name);
      this.scoreValue = 10
      this.addComponent(new Rectangle("gray"))
      this.addComponent(new BlankComponent(x,y))
    }
  }
  
  window.BlankPrefab = BlankPrefab