class ScoreReaderComponent extends Component {
    update(){
        this.parent.getComponent("Text").text = "" + Globals.score
    }
}

window.ScoreReaderComponent = ScoreReaderComponent