import "/engine/classes/Component.js"
import "/engine/classes/GameObject.js"
import "/engine/classes/Scene.js"

import "/engine/components/Circle.js"
import "/engine/components/Point.js"
import "/engine/components/Rectangle.js"
import "/engine/components/Text.js"
import "/engine/components/Transform.js"

import "/engine/static/Collisions.js"
import "/engine/static/Input.js"
import "/engine/static/Globals.js"
import "/engine/static/Time.js"

class Engine{
    static gameLoop(){
        let canvas = document.querySelector("#canv")
        let ctx = canvas.getContext("2d")

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        Engine.currentScene.start(ctx)

        Engine.currentScene.update(ctx)

        Engine.currentScene.gameObjects = Engine.currentScene.gameObjects.filter(go =>go.markForDestroy == false)

        Engine.currentScene.draw(ctx)
    }

    static setUp(){
        document.addEventListener("keydown", Input.keydown)
        document.addEventListener("keyup", Input.keyup)
        document.addEventListener("mousemove", Input.mousemove)


        //In the background, create a thread and call
        //gameLoop every 100ms.

        setInterval(Engine.gameLoop, Time.ms)
    }
}

window.Engine = Engine
export default Engine