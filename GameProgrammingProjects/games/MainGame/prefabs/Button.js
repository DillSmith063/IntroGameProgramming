class Button extends GameObject{
    constructor(number, name = "Button"){
        super(name)
        this.number = number
    }

    start(){
        this.layer = 0
        this.addComponent(new Rectangle("white", "gray"))

        this.addEventListener('mousedown', (event) => {
            console.log(`Button ${this.number} was clicked.`)
        })
    }
}

window.Button = Button