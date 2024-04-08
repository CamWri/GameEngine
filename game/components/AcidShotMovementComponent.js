class AcidShotMovementComponent extends Component{
    constructor(direction){
        super()
        this.direction = direction
        this.bulletDuration = 0
        this.characterObject = Engine.currentScene.gameObjects.find(go=>go.name == "CharacterGameObject")
    }

    update(){
        let characterAcidShotCollision = Collisions.isCircleCircleCollision({x: this.transform.x , y:this.transform.y}, {x: this.characterObject.transform.x, y: this.characterObject.transform.y}, 10, 25)
        this.bulletSpeed = 250


        if(characterAcidShotCollision || this.bulletDuration > 1000){
            let acidPoolGameObject = new GameObject("AcidPool", "EnemeyGameObject")
            acidPoolGameObject.addComponent(new Circle("limegreen", "lawngreen", 50, 1))
            acidPoolGameObject.addComponent(new AcidPoolDuractionComponent())

            GameObject.instantiate(acidPoolGameObject, this.transform.x, this.transform.y)
            GameObject.destroy(this.parent)
        }

        if(this.direction == 1){
            if(!Collisions.isCircleInsideRectangleCollisionTop(105, this.transform.y) && this.bulletDuration < 1000){
                this.transform.y -= this.bulletSpeed * Time.deltaTime
            }
        } else if (this.direction == 2){
            if(!Collisions.isCircleInsideRectangleCollisionRight(window.innerWidth - 155, this.transform.x) && this.bulletDuration < 1000){
                this.transform.x += this.bulletSpeed * Time.deltaTime
            }
        } else if (this.direction == 3){
            if(!Collisions.isCircleInsideRectangleCollisionBottom(window.innerHeight - 105, this.transform.y) && this.bulletDuration < 1000){
                this.transform.y += this.bulletSpeed * Time.deltaTime
            }
        } else if (this.direction == 4){
            if(!Collisions.isCircleInsideRectangleCollisionLeft(155, this.transform.x) && this.bulletDuration < 1000){
                this.transform.x -= this.bulletSpeed * Time.deltaTime
            }
        }

        this.bulletDuration += Time.ms
    }
}

window.AcidShotMovementComponent = AcidShotMovementComponent
export default AcidShotMovementComponent