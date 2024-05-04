//Check if mouse pointer is in collision with button
//if button is pressed and button number is != failState number, add 10 to score, subtract one from plays, and destroy button
//If button is pressed and button number is == failState number, transition to DeathScene
//If plays == 0, and failState button has not been destroyed, transition to VictoryScene
class PlayComponent extends Component {
    constructor(){
        super()
        EventSystem.registerListener(this)
        this.failState = Math.floor(Math.random() * 5) + 1
        this.score = 0
        this.plays = 4
    }

    start(){

    }

    handleEvent(event){
        if (event.dest == this.parent) {
            if(event.name == "mousedown"){
                if(event.dest.number != this.failState){
                    this.score += 10
                    this.plays--
                    event.dest.destroy()
                } else {

                }
            }
        }
    }

    update(){
        
    }
}

window.PlayComponent = PlayComponent