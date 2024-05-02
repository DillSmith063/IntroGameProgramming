import "/GameProgrammingProjects/engine/classes/Component.js"
import "/GameProgrammingProjects/engine/classes/GameObject.js"
import "/GameProgrammingProjects/engine/classes/Scene.js"

import "/GameProgrammingProjects/engine/components/Circle.js"
import "/GameProgrammingProjects/engine/components/Rectangle.js"
import "/GameProgrammingProjects/engine/components/Text.js"
import "/GameProgrammingProjects/engine/components/Transform.js"
import "/GameProgrammingProjects/engine/components/Point.js"

import "/GameProgrammingProjects/engine/geometry/Circle2.js"
import "/GameProgrammingProjects/engine/geometry/Line2.js"
import "/GameProgrammingProjects/engine/geometry/Rectangle2.js"
import "/GameProgrammingProjects/engine/geometry/Vector2.js"

import "/GameProgrammingProjects/engine/prefabs/Camera.js"

import "/GameProgrammingProjects/engine/static/Collisions.js"
import "/GameProgrammingProjects/engine/static/CollisionsGeometric.js"
import "/GameProgrammingProjects/engine/static/Globals.js"
import "/GameProgrammingProjects/engine/static/Input.js"
import "/GameProgrammingProjects/engine/static/Time.js"
import "/GameProgrammingProjects/engine/static/EventSystem.js"


class Engine {

    isSystemPaused = false

    static gameLoop() {
        let canvas = document.querySelector("#canv")
        let ctx = canvas.getContext("2d")

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        if(Input.keysUpThisFrame.includes("KeyP")){
            if(Engine.isSystemPaused){
                Engine.isSystemPaused = false
            } else {
                Engine.isSystemPaused = true
            }
        }
    
        Engine.currentScene.draw(ctx)

        if(!Engine.isSystemPaused){
            Engine.currentScene._start(ctx)
            Engine.currentScene.update(ctx)
            Engine.currentScene.gameObjects = Engine.currentScene.gameObjects.filter(go => go.markForDestroy == false)
        }

        Input.update()

        Time.update()
    }

    static setup() {
        document.addEventListener("keydown", Input.keydown)
        document.addEventListener("keyup", Input.keyup)

        document.addEventListener("mousemove", Input.mousemove)
        document.addEventListener("mouseup", Input.mouseup)

        setInterval(Engine.gameLoop, Time.ms)
    }
}

window.Engine = Engine