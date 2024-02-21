class CircleGameObject extends GameObject {
    constructor() {
        super()
        this.addComponent(new Circle())
        this.addComponent(new Keyboard())
    }
}