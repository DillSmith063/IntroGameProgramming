class FollowMouseComponent extends Component{
    constructor(){
        super()
    }

    update(){
        this.transform.x = Input.mousePosition.x
        this.transform.y = Input.mousePosition.y

        if(Collisions.isPointRectangleCollision(
            this.transform.x, this.transform.y,
            this.parent.transform.x, this.parent.transform.y,
            this.parent.transform.width, this.parent.transform.height
        )){
            let event = {
                name: "pointCollision",
                dest: this.parent
            }
            EventSystem.fireEvent(event)
        }
    }
}

window.FollowMouseComponent = FollowMouseComponent