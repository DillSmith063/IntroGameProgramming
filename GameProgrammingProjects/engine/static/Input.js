class Input {
    static keysDown = []
    static keysUpThisFrame = []

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

    static update(){
        Input.keysUpThisFrame = []
    }
}

window.Input = Input