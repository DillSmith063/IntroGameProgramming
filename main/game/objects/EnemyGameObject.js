class EnemyGameObject extends GameObject {
    constructor() {
        super()
        this.transform.x = 200
        this.addComponent(new Circle())
        this.addComponent(new Keyboard())
    }
}