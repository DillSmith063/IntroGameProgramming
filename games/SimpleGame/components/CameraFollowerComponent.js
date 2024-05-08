class CameraFollowerComponent extends Component{
    constructor(){
        super()
    }
    update(ctx){
        Camera.main.transform.x = this.transform.x-Engine.currentScene.logicalWidth/2
        Camera.main.transform.y = this.transform.y-Engine.currentScene.logicalWidth/2
    }
}

window.CameraFollowerComponent = CameraFollowerComponent