class ButtonPrefab extends GameObject{
    constructor(number, name = "Button"){
        super(name)
        this.number = number
    }

    start(){
        this.layer = 0
        this.scoreValue = 10
        this.failState = false
        this.addComponent(new ButtonComponent())
        this.addComponent(new Rectangle("white", "black"))
    }
}

window.ButtonPrefab = ButtonPrefab