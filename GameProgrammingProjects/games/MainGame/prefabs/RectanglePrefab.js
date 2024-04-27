class RectanglePrefab extends GameObject{
    constructor(name = "RectanglePrefab"){
        super(name)
    }

    start(){
        this.layer = -1
        this.addComponent(new Rectangle("black", "black"))
    }
}

window.RectanglePrefab = RectanglePrefab