import Collisions from "../engine/Collisions.js";
import Component from "../engine/Component.js"
import Game from "../engine/Game.js";

//Change the color of a brick if there is ever an overlap with the player
class BrickController extends Component{
  constructor(parent){
    super(parent)
  }
  update(ctx){
    //Get the player game object
    let playerGameObject = Game.findByNameOne("Player");

    // Get the player rectangle component
    let player = playerGameObject.getComponent("Rectangle");

    //Color based on collision status
    if(Collisions.inCollision(player, this.parent.getComponent("Rectangle"))){
      this.parent.getComponent("RectangleDraw").fillStyle = "white"
    }
    else{
      this.parent.getComponent("RectangleDraw").fillStyle = "brown"
    }

  }
}

export default BrickController;