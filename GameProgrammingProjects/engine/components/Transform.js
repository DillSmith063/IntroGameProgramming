class Transform extends Component {
    x = 0
    y = 0
    scaleX = 1
    scaleY = 1

    getPositionAsVector2(){
        return new Vector2(this.x, this.y)
    }

    getScaleAsVector2(){
        return new Vector2(this.scaleX, this.scaleY)
    }
}

window.Transform = Transform