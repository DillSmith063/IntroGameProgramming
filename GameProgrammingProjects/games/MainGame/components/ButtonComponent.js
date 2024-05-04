class ButtonComponent extends Component{
    constructor(){
        super()
        EventSystem.registerListener(this)
    }

    start(){
        
    }

    handleEvent(event){
        let failState = Math.floor(Math.random() * 5) + 1

        if(event.dest == this.parent){
            if(event.name == "pointCollision"){
                let buttons = GameObject.filter("ButtonPrefab")

                for(let button of buttons){
                    if(button.number != failState){
                        Globals.score += button.scoreValue
                        GameObject.destory(button)
                        if(buttons.length == 1){
                            Engine.currentScene = new VictoryScene()
                        }
                    } else {
                        Engine.currentScene = new DeathScene()
                    }
                }
            }

        }

    }
}

window.ButtonComponent = ButtonComponent