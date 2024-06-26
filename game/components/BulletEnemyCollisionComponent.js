class BulletEnemeyCollisionComponent extends Component{
    constructor(){
        super()
    }

    update(){
        let enemeylist = Engine.currentScene.gameObjects.filter(go=>go.tag == "EnemeyGameObject")


        //Ask when I had it in start, it was undefined but when I have it in update, its fine with a value of 1.
        //  Is that because it is not a component of the scene to being with so start does nothing.
        this.charDamage = Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").damage

        for(let i = 0; i < enemeylist.length; i++){
            let enemeyCircleConstructor = enemeylist[i].components.find(go=>go.constructor.name == "Circle")
            let enemeyHealthConstructor = enemeylist[i].components.find(go=>go.constructor.name == "EnemeyHealthComponent")


            let collision = Collisions.isCircleCircleCollision({x:this.transform.x, y:this.transform.y}, {x:enemeylist[i].transform.x, y:enemeylist[i].transform.y}, 2, enemeyCircleConstructor.radius + enemeyCircleConstructor.outlineWitdth)
            if(collision){
                if(enemeylist[i].name == "AcidShot"){
                    GameObject.destroy(this.parent)
                    GameObject.destroy(enemeylist[i])
                }else if(enemeylist[i].name == "AcidPool"){
                    GameObject.destroy(this.parent)
                } else if (enemeylist[i].name == "EnemyBulletGameObject"){
                    GameObject.destroy(this.parent)
                    GameObject.destroy(enemeylist[i])
                } else {
                    GameObject.destroy(this.parent)
                    enemeyHealthConstructor.health -= this.charDamage
                    enemeyCircleConstructor.fill = "red"
                }




            } else {
                enemeyCircleConstructor.fill = enemeyCircleConstructor.originalfill
            }
        }
    }
}

window.BulletEnemeyCollisionComponent = BulletEnemeyCollisionComponent
export default BulletEnemeyCollisionComponent