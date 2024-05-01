class AttackUpGameObject extends GameObject{
    constructor(name = "HealthUpGameObject"){
        super(name)
    }

    start(){
        //this.layer = 0
        this.addComponent(new Rectangle("blue", "white"))
    }
}

window.AttackUpGameObject = AttackUpGameObject