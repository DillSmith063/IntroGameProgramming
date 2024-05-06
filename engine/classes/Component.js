class Component {
    parent = null 

    get transform() {
        return this.parent.transform;
    }
}

window.Component = Component