class PointPrefab extends GameObject{
    constructor(name = "PointPrefab"){
        super(name)
    }

    start(){
        this.layer = 0
        this.addComponent(new Point())
        this.addComponent(new FollowMouseComponent())
    }
}

window.PointPrefab = PointPrefab