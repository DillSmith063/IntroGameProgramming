import "../button-model.js"
import "../button-model-events.js"
import "../prefabs/BlankPrefab.js"
import "../prefabs/BoardLinePrefab.js"
import "../prefabs/SafePrefab.js"
import "../components/BlankComponent.js"
import "../components/ScoreUpdaterComponent.js"
import "../components/ScoreReaderComponent.js"
import "./WinScene.js"
import "./LoseScene.js"

class MainScene extends Scene {
    static model;
    constructor() {
      super("lightgray")
      MainScene.model = new ButtonModelEvents()
    }
    start(ctx) {
      //Draw the board
      const margin = 250
      const barWidth = 25
      const barHeight = 200
      const buttonSize = 100
      const spacing = 300

      for(let i = 0; i < 5; i++){
        if(i > 0){
          GameObject.instantiate(new BoardLinePrefab(), 
          i * spacing - spacing / 2 + margin, 
          barHeight / 6 + margin, 
          barWidth, 
          barHeight - 75)
        }

        GameObject.instantiate(new BlankPrefab(i, 0), 
          i * spacing + margin, 
          barHeight / 6 + margin, 
          buttonSize, 
          buttonSize)
      }

      let scoreGameObject = new GameObject()
      scoreGameObject.addComponent(new Text("Score: ", "100px Papyrus",  "black"))
      scoreGameObject.addComponent(new ScoreUpdaterComponent())
      GameObject.instantiate(scoreGameObject, 100, 100)

      /*GameObject.instantiate(new BoardLinePrefab(), barHeight / 3 + margin, barHeight / 6 + margin, barWidth, barHeight - 75)
      GameObject.instantiate(new BoardLinePrefab(), 2 * barHeight / 3 + margin, barHeight / 6 + margin, barWidth, barHeight - 75)
      GameObject.instantiate(new BoardLinePrefab(), 3 * barHeight / 3 + margin, barHeight / 6 + margin, barWidth, barHeight - 75)
      GameObject.instantiate(new BoardLinePrefab(), 4 * barHeight / 3 + margin, barHeight / 6 + margin, barWidth, barHeight - 75)
  
      //Draw the button
      for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 1; y++) {
          //Use buttonHeight/6 to center the buttons
          GameObject.instantiate(new BlankPrefab(x,y), 
          x * (barHeight + buttonSize) / 3 + barHeight / 6 + margin, 
          y * (barHeight + buttonSize) / 3 + barHeight / 6 + margin, 
          buttonSize, 
          buttonSize)
        }
      }
  
      let scoreGameObject = new GameObject()
      scoreGameObject.addComponent(new Text("Score: ", "30px Papyrus",  "black"))
      scoreGameObject.addComponent(new ScoreUpdaterComponent())
      GameObject.instantiate(scoreGameObject, 20, 100)
  
    }*/
  }
}
  window.MainScene = MainScene