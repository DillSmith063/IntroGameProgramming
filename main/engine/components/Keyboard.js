class Keyboard extends Component {
    update(ctx) {
        let speed = 100
        let currentShape = 'circle'
    
        if (keysDownThisFrame.includes("ArrowLeft") || keysDownThisFrame.includes("KeyA")) {
            this.x -= speed / Time.fps
        }
    
        if (keysDownThisFrame.includes("ArrowRight") || keysDownThisFrame.includes("KeyD")) {
            this.x += speed / Time.fps
        }
    
        if (keysDownThisFrame.includes("ArrowUp") || keysDownThisFrame.includes("KeyW")) {
            this.y -= speed / Time.fps
        }
    
        if (keysDownThisFrame.includes("ArrowDown") || keysDownThisFrame.includes("KeyS")) {
            this.y += speed / Time.fps
        }
    
        if(keysDownThisFrame.includes("Space")){
            currentShape = currentShape === 'circle' ? 'rectangle' : 'circle'
        }
    }
}