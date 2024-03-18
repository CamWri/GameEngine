class BulletMovementComponent extends Component{
    constructor(direction){
        super()
        this.direction = direction
        this.bulletDuration = 0
    }

    update(ctx){
        this.bulletSpeed = Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").bulletSpeed

        if(this.direction == 1){
            if(!Collisions.isCircleInsideRectangleCollisionTop(105, this.transform.y) && this.bulletDuration < 2000){
                this.transform.y -= this.bulletSpeed / Time.fps
            } else {
                Engine.currentScene.gameObjects.splice(Engine.currentScene.gameObjects.indexOf(this.parent), 1)
            }
        } else if (this.direction == 2){
            if(!Collisions.isCircleInsideRectangleCollisionRight(window.innerWidth - 155, this.transform.x) && this.bulletDuration < 2000){
                this.transform.x += this.bulletSpeed / Time.fps
            } else {
                Engine.currentScene.gameObjects.splice(Engine.currentScene.gameObjects.indexOf(this.parent), 1)
            }
        } else if (this.direction == 3){
            if(!Collisions.isCircleInsideRectangleCollisionBottom(window.innerHeight - 105, this.transform.y) && this.bulletDuration < 2000){
                this.transform.y += this.bulletSpeed / Time.fps
            } else {
                Engine.currentScene.gameObjects.splice(Engine.currentScene.gameObjects.indexOf(this.parent), 1)
            }
        } else if (this.direction == 4){
            if(!Collisions.isCircleInsideRectangleCollisionLeft(155, this.transform.x) && this.bulletDuration < 2000){
                this.transform.x -= this.bulletSpeed / Time.fps
            } else {
                Engine.currentScene.gameObjects.splice(Engine.currentScene.gameObjects.indexOf(this.parent), 1)
            }
        }
        this.bulletDuration += Time.ms
    }
}

window.BulletMovementComponent = BulletMovementComponent
export default BulletMovementComponent