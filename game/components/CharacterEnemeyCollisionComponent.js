class CharacterEnemeyCollisionComponent extends Component{
    constructor(){
        super()
        this.hit = false
        this.time = 0
    }

    start(){
        this.health = Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").currentHealth
    }

    update(ctx){
        let enemeylist = Engine.currentScene.gameObjects.filter(go=>go.tag == "EnemeyGameObject")

        for(let i = 0; i < enemeylist.length; i++){
            let collision = Collisions.isCircleCircleCollision({x:this.transform.x, y:this.transform.y}, {x:enemeylist[i].transform.x, y:enemeylist[i].transform.y}, 25, 25)

            if(collision){
                if(!this.hit){
                    let gameObject = GameObject.find_tag("LifeGameObject")
                    if(gameObject){
                        GameObject.destroy(gameObject)
                        this.hit = true
                        this.time = 0
                        this.health -= 1
                    }
                    if(this.health == 0){
                        Engine.currentScene = new DeathScene()
                    }
    
                } else if(this.time > 1500){
                    this.hit = false
                    this.time = 0
                } 
            }
        }

       
        this.time += Time.ms

    }
}

window.CharacterEnemeyCollisionComponent = CharacterEnemeyCollisionComponent
export default CharacterEnemeyCollisionComponent