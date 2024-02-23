class Circle extends Component {
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "black"
        ctx.strokeStyle = "red"
        ctx.lineWidth = 5
        ctx.arc(this.transform.x, this.transform.y, 50, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
    }
}