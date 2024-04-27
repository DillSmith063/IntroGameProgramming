class SpeedUpGameObject extends GameObject{
    constructor(name = "SpeedUpGameObject"){
        super(name)
    }

    start(){
        //this.layer = 0
        this.addComponent(new Rectangle("green", "white"))
    }
}

window.SpeedUpGameObject = SpeedUpGameObject