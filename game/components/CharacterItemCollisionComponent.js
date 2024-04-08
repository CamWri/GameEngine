class CharacterItemCollisionComponent extends Component{
    constructor(){
        super()
        this.hit = false
        this.time = 0
        this.characterObject = Engine.currentScene.gameObjects.find(go=>go.name == "CharacterGameObject")
    }

    update(ctx){
        let collision = Collisions.isCircleCircleCollision({x:this.transform.x, y:this.transform.y}, {x:this.characterObject.transform.x, y:this.characterObject.transform.y}, 25, 15)

        Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").damage


        if (collision){
            GameObject.destroy(this.parent)
            Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").maxHealth += 1 
            Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").currentHealth += 1 
        }

        
    }
}

window.CharacterItemCollisionComponent = CharacterItemCollisionComponent
export default CharacterItemCollisionComponent