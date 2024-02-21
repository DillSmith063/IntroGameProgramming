class RectangleGameObject extends GameObject {
    constructor() {
        super()
        this.addComponent(new Rectangle())
        this.addComponent(new Keyboard())
    }
}