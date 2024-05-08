class BallPrefab extends GameObject{
    constructor(name){
        super(name)
        this.distanceTraveled = 0
    }

    start(ctx){
        this.addComponent(new Circle("green", "transparent"))
        this.addComponent(new RigidBody())
        this.addComponent(new CameraFollowerComponent())

    }
}

window.BallPrefab = BallPrefab