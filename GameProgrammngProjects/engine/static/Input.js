class Input {
    static keysDown = []
    static keysDownThisFrame = []
    static keysUpThisFrame = []
    //static currentShape = 'circle'

    static keyup(e) {
        console.log(e)
        let index = Input.keysDownThisFrame.indexOf(e.code)
        Input.keysDownThisFrame.splice(index, 1)
    }
    
    static keydown(e) {
        console.log(e)
        if (!Input.keysDownThisFrame.includes(e.code)) {
            Input.keysDownThisFrame.push(e.code)
        }
    }
}

window.Input = Input
export default Input