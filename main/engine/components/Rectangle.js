class Rectangle extends Component {
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = "black"
        ctx.strokeStyle = "blue"
        ctx.lineWidth = 5
        ctx.fillRect(150 + this.parent.transform.x - 100, 150 + this.parent.transform.y - 100, 100, 100)
        ctx.strokeRect(150 + this.parent.transform.x - 100, 150 + this.parent.transform.y - 100, 100, 100)
    }
}