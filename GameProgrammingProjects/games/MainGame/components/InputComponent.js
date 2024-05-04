class InputComponent extends Component {
    constructor() {
        super()
    }

    start() {
        this.gameObject.addEventListener('mousedown', (event) => {
            if (Input.mouseDownThisFrame) {
                console.log(`Button ${this.gameObject.number} was clicked.`)
            }
        })
    }
}

window.InputComponent = InputComponent