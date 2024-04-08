import "/game/components/RestartGameComponent.js"


class DeathScene extends Scene{
    constructor(){
        super("white")
    }

    start(){
        let ScoreTextObject= new GameObject("Score Game Text")
        ScoreTextObject.transform.x = window.innerWidth/4
        ScoreTextObject.transform.y = window.innerHeight/2
        ScoreTextObject.addComponent(new Text("Your Score is " + Globals.score , "80px sans", "black"))
        this.gameObjects.push(ScoreTextObject)

        let DeathTextObject= new GameObject("Start Game Text")
        DeathTextObject.transform.x = window.innerWidth/4
        DeathTextObject.transform.y = window.innerHeight/2 - 200
        DeathTextObject.addComponent(new Text("You Died", "80px sans", "black"))
        this.gameObjects.push(DeathTextObject)

        let restartGameObject = new GameObject("Restart Game")
        restartGameObject.addComponent(new RestartGameComponent())
        this.gameObjects.push(restartGameObject)
    }
}

window.DeathScene = DeathScene
export default DeathScene