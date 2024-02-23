class MainScene extends Scene {
    constructor() {
        super("gray")

        this.gameObject = []

        let circleGameObject = new CircleGameObject()
        this.gameObject.push(circleGameObject)

        let enemyGameObject = new EnemyGameObject()
        this.gameObject.push(enemyGameObject)
    }
}