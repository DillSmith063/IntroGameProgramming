class OPrefab extends GameObject{
    constructor(x, y, name = "XPrefab"){
        super(name)
        this.x = x
        this.y = y
        this.addComponent(new Rectangle("red"))
    }
}

window.XPrefab = XPrefab