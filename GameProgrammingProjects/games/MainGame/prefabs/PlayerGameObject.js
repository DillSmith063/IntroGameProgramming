class PlayerGameObject extends GameObject {
    constructor(name = "PlayerGameObject"){
        super(name)
    }

    start(){
        this.health = 1
        this.attack = 1
        this.speed = 1
        this.layer = 0

        this.addComponent(new Circle("white", "black"))
        this.addComponent(new KeyboardComponent())
    }
}

window.PlayerGameObject = PlayerGameObject