import "/GameProgrammingProjects/engine/classes/Component.js"
import "/GameProgrammingProjects/engine/classes/GameObject.js"
import "/GameProgrammingProjects/engine/classes/Scene.js"

import "/GameProgrammingProjects/engine/components/Circle.js"
import "/GameProgrammingProjects/engine/components/Rectangle.js"
import "/GameProgrammingProjects/engine/components/Text.js"
import "/GameProgrammingProjects/engine/components/Transform.js"

import "/GameProgrammingProjects/engine/static/Collisions.js"
import "/GameProgrammingProjects/engine/static/Globals.js"
import "/GameProgrammingProjects/engine/static/Input.js"
import "/GameProgrammingProjects/engine/static/Time.js"
import "/GameProgrammingProjects/engine/static/EventSystem.js"


class Engine {
    static gameLoop() {
        let canvas = document.querySelector("#canv")
        let ctx = canvas.getContext("2d")

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    
        Engine.currentScene.draw(ctx)

        Engine.currentScene._start(ctx)

        Engine.currentScene.update(ctx)

        Engine.currentScene.gameObjects = Engine.currentScene.gameObjects.filter(go => go.markForDestory == false)

        Input.update()

        Time.update(ctx)
    }

    static setup() {
        document.addEventListener("keydown", Input.keydown)
        document.addEventListener("keyup", Input.keyup)

        setInterval(Engine.gameLoop, Time.ms)
    }
}

window.Engine = Engine
export default Engine;