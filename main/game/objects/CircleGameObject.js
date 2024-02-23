class CircleGameObject extends GameObject {
    constructor() {
        super()

        this.transform.x = 0
        this.transform.y = 0

        this.addComponent(new Circle())
        this.addComponent(new Keyboard())
    }

    draw(ctx) {
        super.draw(ctx)
    }
}