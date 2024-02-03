import Scene from "../engine/Scene.js"
import SouthernTextGameObject from "./SouthernTextGameObject.js"
import GoNorthGameObject from "./GoNorthGameObject.js"


class SouthernScene extends Scene {
  constructor() {
    super("SouthernScene", "white");
  }

  start(){
    //Add the button
    this.gameObjects.push(new GoNorthGameObject(100, 200, 20))

    //Add the text
    this.gameObjects.push(new SouthernTextGameObject(100, 100));

  }
}

export default SouthernScene;
