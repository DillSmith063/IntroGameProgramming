class HealthUpGameObject extends GameObject{
    constructor(name = "HealthUpGameObject"){
        super(name)
    }

    start(){
        //this.layer = 0
        this.addComponent(new Rectangle("red", "white"))
    }
}

window.HealthUpGameObject = HealthUpGameObject
