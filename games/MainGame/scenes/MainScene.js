import "../button-model.js"
import "../button-model-events.js"
import "../prefabs/BlankPrefab.js"
import "../prefabs/BoardLinePrefab.js"
import "../prefabs/SafePrefab.js"
import "../components/BlankComponent.js"
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
      const margin = 15;
      const barWidth = 5;
      const barHeight = 100;
      GameObject.instantiate(new BoardLinePrefab(), barHeight / 3 + margin, barHeight / 6 + margin, barWidth, barHeight - 75)
      GameObject.instantiate(new BoardLinePrefab(), 2 * barHeight / 3 + margin, barHeight / 6 + margin, barWidth, barHeight - 75)
      GameObject.instantiate(new BoardLinePrefab(), 3 * barHeight / 3 + margin, barHeight / 6 + margin, barWidth, barHeight - 75)
      GameObject.instantiate(new BoardLinePrefab(), 4 * barHeight / 3 + margin, barHeight / 6 + margin, barWidth, barHeight - 75)
  
      //Draw the button
      let buttonSize = 20;
      for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 1; y++) {
          //Use buttonHeight/6 to center the buttons
          GameObject.instantiate(new BlankPrefab(x,y), 
          x * barHeight/3 + barHeight/6+ margin, 
          y * barHeight/3 + barHeight/6 + margin, 
          buttonSize, 
          buttonSize)
        }
      }
  
  
  
    }
  }
  
  window.MainScene = MainScene