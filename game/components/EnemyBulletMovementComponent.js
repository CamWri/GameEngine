class EnemyBulletMovementComponent extends Component{
    constructor(){
        super()
        this.characterObjectXCord = Engine.currentScene.gameObjects.find(go=>go.name == "CharacterGameObject").transform.x
        this.characterObjectYCord = Engine.currentScene.gameObjects.find(go=>go.name == "CharacterGameObject").transform.y
        this.speed = 10
    }

    update(){
        let distanceX = this.characterObjectXCord - this.transform.x
        let distanceY = this.characterObjectYCord - this.transform.y


        let distanceTotal = Math.sqrt(distanceX ** 2 + distanceY ** 2)

        let collision = Collisions.isCircleCircleCollision({x:this.transform.x, y:this.transform.y}, {x:this.characterObjectXCord, y:this.characterObjectYCord}, 10, 20)
        
        if((distanceTotal > -10 && distanceTotal < 10) || collision){
            GameObject.destroy(this.parent)
        } else {
            let ratio = this.speed / distanceTotal
            this.transform.x += ratio * distanceX
            this.transform.y += ratio * distanceY
        }
    }
}

window.EnemyBulletMovementComponent = EnemyBulletMovementComponent
export default EnemyBulletMovementComponent