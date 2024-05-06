class GameObject {
    components = []
    layer = 0

    constructor(name) {
        this.name = name
        this.addComponent(new Transform())
        this.markForDestroy = false
    }

    get transform() {
        return this.components[0]
    }

    addComponent(component) {
        this.components.push(component)
        component.parent = this
    }

    start(ctx) {
        for (let component of this.components) {
            if (component.start) {
                component.start(ctx)
            }
        }
    }

    update(ctx) {
        for (let component of this.components) {
            if (component.update) {
                component.update(ctx)
            }
        }
    }

    draw(ctx) {
        for (let component of this.components) {
            if (component.draw) {
                component.draw(ctx)
            }
        }
    }

    drawUI(ctx) {
        for (let component of this.components) {
            if (component.drawUI) {
                component.drawUI(ctx)
            }
        }
    }

    getComponent(name){
        return this.components.find(c=>c.constructor.name == name)
    }

    static find(gameObjectName) {
        return Engine.currentScene.gameObjects.find(go => go.name == gameObjectName)
    }

    static filter(gameObjectName) {
        return Engine.currentScene.gameObjects.filter(go => go.name == gameObjectName)
    }

    static instantiate(gameObject, x = 0, y = 0, scaleX = 1, scaleY = 1) {
        Engine.currentScene.gameObjects.push(gameObject)
        gameObject.transform.x = x
        gameObject.transform.y = y
        gameObject.transform.scaleX = scaleX
        gameObject.transform.scaleY = scaleY
    }

    static destroy(gameObject) {
        gameObject.markForDestroy = true
    }
}

window.GameObject = GameObject