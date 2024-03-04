import "/engine/classes/Component.js"
import "/engine/classes/GameObject.js"
import "/engine/classes/Scene.js"

import "/engine/components/Circle.js"
import "/engine/components/Rectangle.js"
import "/engine/components/Transform.js"

import "/engine/static/Transform.js"
import "/engine/static/Globals.js"
import "/engine/static/Input.js"
import "/engine/static/Time.js"


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
export default Engine