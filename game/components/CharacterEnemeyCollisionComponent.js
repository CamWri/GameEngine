class CharacterEnemeyCollisionComponent extends Component{
    constructor(){
        super()
        this.hit = false
        this.time = 0
    }

    update(ctx){
        let enemeylist = Engine.currentScene.gameObjects.filter(go=>go.tag == "EnemeyGameObject")
        let letEmptyHealthCount = 1

        for(let i = 0; i < enemeylist.length; i++){
            let enemeyRadius = enemeylist[i].components.find(go => go.constructor.name == "Circle").radius

            let collision = Collisions.isCircleCircleCollision({x:this.transform.x, y:this.transform.y}, {x:enemeylist[i].transform.x, y:enemeylist[i].transform.y}, 25, enemeyRadius)

            if(collision){
                if(!this.hit){
                    let gameObject = GameObject.find_tag("LifeGameObject")
                    if(gameObject){
                        GameObject.destroy(gameObject)
                        this.hit = true
                        this.time = 0
                        Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").currentHealth -= 1

                        let emptyhealthComponent = new GameObject("EmptyHealth" + letEmptyHealthCount, "LifeGameObject")
                        emptyhealthComponent.transform.x = gameObject.transform.x
                        emptyhealthComponent.transform.y = 50
                        emptyhealthComponent.addComponent(new Circle("white", "white", 20, 1))//Create the circle component of this object
                        Engine.currentScene.gameObjects.push(emptyhealthComponent)
                    }
                    if(Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").currentHealth == 0){
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