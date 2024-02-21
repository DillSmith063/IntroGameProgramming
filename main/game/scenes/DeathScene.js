class DeadScene extends Scene {
    constructor() {
        super("black")
  
        let deathTextGameObject = new DeathTextGameObject()
        this.gameObjects.push(deathTextGameObject)
  
        let deathSceneGameObject = new DeathSceneGameObject()
        this.gameObjects.push(deathSceneGameObject)
    }
  }