class GameObject {
    components = []
    constructor() {
        this.addComponent(new Transform())
    }

    get transform(){
        return this.components[0]
    }

    addComponent(component) {
        this.components.push(component)
        component.parent = this
    }

    update(ctx) {
        for(let component of this.components) {
            if(component.update) {
                component.update(ctx)
            }
        }
    }

    draw() {
        for(let component of this.components) {
            if(component.draw) {
                component.draw(ctx)
            }
        }
    }
}