class EnemyGameObject extends GameObject{
    constructor(name = "EnemyGameObject"){
        super(name)
    }
    
    start(){
        this.health = 1
        //this.addComponent(new EnemyComponent())
        this.addComponent(new Circle("red", "black"))
    }
}

window.EnemyGameObject = EnemyGameObject