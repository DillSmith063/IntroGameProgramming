class GameObject {
    components = []
    constructor(name) {
        this.name = name
        this.addComponent(new Transform())
    }

    get transform(){
        return this.components[0]
    }

    addComponent(component) {
        this.components.push(component)
        component.parent = this
    }

    start(ctx){
        for(let component of this.components){
            if(component.start){
                component.start(ctx)
            }
        }
    }

    update(ctx) {
        for(let component of this.components) {
            if(component.update) {
                component.update(ctx)
            }
        }
    }

    draw(ctx) {
        for(let component of this.components) {
            if(component.draw) {
                component.draw(ctx)
            }
        }
    }

    static find(gameObjectName) {
        return Engine.currentScene.gameObjects.find(go => go.name == gameObjectName)
    }

    static filter(gameObjectName) {
        return Engine.currentScene.gameObjects.filter(go => go.name == gameObjectName)
    }

    static instantiate(gameObject) {
        Engine.currentScene.gameObjects.push(gameObject)
    }
}

window.GameObject = GameObject
export default GameObject