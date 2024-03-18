class DasherMovementComponentRight extends Component{
    constructor(){
        super()
        this.attack = false
        this.attackCooldown = 3000
        this.horzMovement = 0
        this.vertMovement = 1
    }
    start(){
        this.characterObject = Engine.currentScene.gameObjects.find(go=>go.name == "CharacterGameObject")
    }

    update(){
        let horzSpeed = 700
        let vertSpeed = 150

        if(Math.abs(this.characterObject.transform.y - this.transform.y) < 20 && this.attackCooldown >= 4000){
            this.attack = true
        }

        if(this.attack && this.attackCooldown >= 3000){
            if (this.characterObject.transform.x > this.transform.x || this.horzMovement == 2){
                if(!Collisions.isCircleInsideRectangleCollisionRight(window.innerWidth - 160, this.transform.x)){
                    this.transform.x += horzSpeed / Time.fps
                    this.horzMovement = 2
                } else {
                    this.attack = false
                    this.horzMovement = 0
                    this.attackCooldown = 0
                }
            } else if(this.characterObject.transform.x < this.transform.x || this.horzMovement == 1){
                if(!Collisions.isCircleInsideRectangleCollisionLeft(160, this.transform.x)){
                    this.horzMovement = 1
                    this.transform.x -= horzSpeed / Time.fps
                } else {
                    this.attack = false
                    this.horzMovement = 0
                    this.attackCooldown = 0
                }
            } 
        } else {
            if(this.vertMovement == 1){
                if(!Collisions.isCircleInsideRectangleCollisionTop(120, this.transform.y)){
                    this.transform.y -= vertSpeed / Time.ms
                    if(Collisions.isCircleInsideRectangleCollisionTop(120, this.transform.y)){
                        this.vertMovement = 2
                    }
                }
            }
            if(this.vertMovement == 2){
                if (!Collisions.isCircleInsideRectangleCollisionBottom(window.innerHeight - 120, this.transform.y)){
                    this.transform.y += vertSpeed / Time.ms
                    if(Collisions.isCircleInsideRectangleCollisionBottom(window.innerHeight - 120, this.transform.y)){
                        this.vertMovement = 1
                    }
                }
            }
        }
        this.attackCooldown += Time.ms
    }
}

window.DasherMovementComponentRight = DasherMovementComponentRight
export default DasherMovementComponentRight