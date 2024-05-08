class ScoreUpdaterComponent extends Component {
    start(){
        Globals.score = 0
        EventSystem.registerListener(this)
    }

    handleEvent(event){
        if(event.name == "scoreUpdate")[
            Globals.score += event.args[0]
        ]
    }

    update(ctx){
        this.parent.getComponent("Text").text = "" + Globals.score
    }
}

window.ScoreUpdaterComponent = ScoreUpdaterComponent