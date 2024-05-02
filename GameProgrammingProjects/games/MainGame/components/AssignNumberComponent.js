class AssignNumberComponent extends Component {
    constructor(){
        super()
    }

    start(){
        let buttons = GameObject.filter("Button")

        let numbers = [1, 2, 3, 4, 5]
        for(let i = numbers.length - 1; i > 0; i--)
        {
            let j = Math.floor(Math.random() * (i + 1))
            let temp = numbers[i]
            numbers[i] = numbers[j]
            numbers[j] = temp
        }

        for(let i = 0; i < buttons.length; i++){
            buttons[i].number = numbers[i]
            console.log(`Button ${i+1}: ${numbers[i]}`);
        }
    }
}

window.AssignNumberComponent = AssignNumberComponent