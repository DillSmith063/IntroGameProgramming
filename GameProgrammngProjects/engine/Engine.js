import "/GameProgrammngProjects/engine/classes/Component.js"
import "/GameProgrammngProjects/engine/classes/GameObject.js"
import "/GameProgrammngProjects/engine/classes/Scene.js"

import "/GameProgrammngProjects/engine/components/Circle.js"
import "/GameProgrammngProjects/engine/components/Rectangle.js"
import "/GameProgrammngProjects/engine/components/Transform.js"

import "/GameProgrammngProjects/engine/static/Collisions.js"
import "/GameProgrammngProjects/engine/static/Globals.js"
import "/GameProgrammngProjects/engine/static/Input.js"
import "/GameProgrammngProjects/engine/static/Time.js"


class Engine {
    static gameLoop() {
        let canvas = document.querySelector("#canv")
        let ctx = canvas.getContext("2d")

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    
        Engine.currentScene.start(ctx)
        Engine.currentScene.update(ctx)
        Engine.currentScene.draw(ctx)
    }

    static setup() {
        document.addEventListener("keydown", Input.keydown)
        document.addEventListener("keyup", Input.keyup)

        setInterval(Engine.gameLoop, Time.ms)
    }
}

window.Engine = Engine
export default Engine;