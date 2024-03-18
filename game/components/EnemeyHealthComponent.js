class EnemeyHealthComponent extends Component{
    constructor(health, characterPoints){
        super()
        this.health = health
        this.characterPoints = characterPoints
    }

    start(){
        
    }

    update(){
        if(this.health <= 0){
            Engine.currentScene.gameObjects.splice(Engine.currentScene.gameObjects.indexOf(this.parent), 1)
            Globals.score += this.characterPoints
        }
    }
}

window.EnemeyHealthComponent = EnemeyHealthComponent
export default EnemeyHealthComponent