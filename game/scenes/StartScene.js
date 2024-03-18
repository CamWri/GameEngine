import "/game/components/StartGameComponent.js"
import "/game/components/CharacterStatsComponent.js"

class StartScene extends Scene{
    constructor(){
        super("black")

        Globals.floorLayoutObect = new GameObject("Floor Layout")
        Globals.floorLayoutObect.addComponent(new CreateFloorComponent())
        this.gameObjects.push(Globals.floorLayoutObect)

        Globals.characterStats = new GameObject("Character Stats")
        Globals.characterStats.addComponent(new CharacterStatsComponent())


        Globals.score = 0

        let StartGameObject = new GameObject("Start Game")
        StartGameObject.addComponent(new StartGameComponent())
        this.gameObjects.push(StartGameObject)

        let StartGameTextObject= new GameObject("Start Game Text")
        StartGameTextObject.transform.x = window.innerWidth/4
        StartGameTextObject.transform.y = window.innerHeight/2
        StartGameTextObject.addComponent(new Text("Press Spacebar To Begin", "80px sans", "white"))
        this.gameObjects.push(StartGameTextObject)
    }
}

window.StartScene = StartScene
export default StartScene