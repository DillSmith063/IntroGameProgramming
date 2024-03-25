class Input {
    static keysDown = []

    static keyup(e) {
        let index = Input.keysDown.indexOf(e.code)
        Input.keysDownThisFrame.splice(index, 1)
    }
    
    static keydown(e) {
        if (!Input.keysDown.includes(e.code)) {
            Input.keysDown.push(e.code)
        }
    }
}

window.Input = Input
export default Input