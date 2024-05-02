class Button extends GameObject{
    constructor(name = "Button"){
        super(name)
    }

    start(){
        this.layer = 0
        this.addComponent(new Rectangle("red", "white"))
        this.addComponent(new AssignNumberComponent())
    }
}

window.Button = Button