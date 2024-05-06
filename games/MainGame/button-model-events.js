import "./button-model.js"

class ButtonModelEvents extends ButtonModel{
    constructor(){
        super()
        EventSystem.registerListener(this)
    }

    setAt(x, y){
        try{
            super.setAt(x, y)
            EventSystem.fireEvent({origin: this, name:"ValidPlay", args:[x, y]})
            console.log(this.toStrin())
        } catch(e) {
            EventSystem.fireEvent({origin: this, name:"InvalidPlay"})
        }
    }

    handleEvent(event){
        if(event.name == "Play"){
            let x = event.args[0]
            let y = event.args[1]

            this.setAt(x, y)
        }
    }
}

window.ButtonModelEvents = ButtonModelEvents