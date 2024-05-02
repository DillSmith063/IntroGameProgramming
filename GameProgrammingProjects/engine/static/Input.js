class Input {
    static keysDown = []
    static keysUpThisFrame = []
    static mousePosition = { x: 0, y: 0 }
    static mouseUpThisFrame = false
    static mouseDownThisFrame = false
    static mouseDown = false
    static wheelDelta = 0

    static mousemove(e) {
        Input.mousePosition.x = e.clientX
        Input.mousePosition.y = e.clientY
    }

    static mouseup(e){
        Input.mouseUpThisFrame = true
        Input.mouseDown = false
    }

    static mousedown(e){
        Input.mouseDownThisFrame = true
        Input.mouseDown = true
    }

    static keyup(e) {
        let index = Input.keysDown.indexOf(e.code)
        Input.keysDown.splice(index, 1)
        Input.keysUpThisFrame.push(e.code)
    }
    
    static keydown(e) {
        if (!Input.keysDown.includes(e.code)) {
            Input.keysDown.push(e.code)
        }
    }

    static wheel(e){
        Input.wheelDelta = e.wheelDelta
        // console.log(e.wheelDelta)
    }

    static update(){
        Input.keysUpThisFrame = []
        Input.mouseUpThisFrame = false
        Input.mouseDownThisFrame = false
        Input.wheelDelta = 0
    }
}

window.Input = Input