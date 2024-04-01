class DasherMovementComponent extends Component{
    constructor(base){
        super()
        this.attack = false
        this.attackCooldown = 3000
        if(base == "right" || base == "left"){
            this.horzMovement = 0
            this.vertMovement = 1
        } else if (base == "top" || base == "bottom"){
            this.horzMovement = 1
            this.vertMovement = 0
        }

        this.characterObject = Engine.currentScene.gameObjects.find(go=>go.name == "CharacterGameObject")
        this.initialTimmer = 0
        this.attackSpeed = 700
        this.idleSpeed = 300
        this.base = base
    }

    update(){
        if(this.base == "left" || this.base == "right"){
            if(this.initialTimmer > 2000){
                if(Math.abs(this.characterObject.transform.y - this.transform.y) < 30 && this.attackCooldown >= 4000){
                    this.attack = true
                }

                if(this.attack && this.attackCooldown >= 3000){
                    if(this.base == "left"){
                        if(this.characterObject.transform.x < this.transform.x || this.horzMovement == 1){
                            this.leftWallCollision()
                        } else if (this.characterObject.transform.x > this.transform.x || this.horzMovement == 2){
                            this.rightWallCollision()
                        } 
                    }
                    if(this.base == "right"){
                        if (this.characterObject.transform.x > this.transform.x || this.horzMovement == 2){
                            this.rightWallCollision()
                        } else if (this.characterObject.transform.x < this.transform.x || this.horzMovement == 1){
                            this.leftWallCollision()
                        }
                    }
                } else {
                    this.verticalWallMovement()
                }
            }
        }

        if(this.base == "top" || this.base == "bottom"){
            if(this.initialTimmer > 2000){
                if(Math.abs(this.characterObject.transform.x - this.transform.x) < 30 && this.attackCooldown >= 4000){
                    this.attack = true
                }

                if(this.attack && this.attackCooldown >= 3000){
                    if(this.base == "top"){
                        if(this.characterObject.transform.y < this.transform.y || this.vertMovement == 1){
                            this.topWallCollision()
                        } else if (this.characterObject.transform.y > this.transform.y || this.vertMovement == 2){
                            this.bottomWallCollision()
                        }
                    }
                    if(this.base == "bottom"){
                        if(this.characterObject.transform.y > this.transform.y || this.vertMovement == 2){
                            this.bottomWallCollision()
                        } else if(this.characterObject.transform.y < this.transform.y || this.vertMovement == 1){
                            this.topWallCollision()
                        }
                    }
                } else {
                    this.horizontalWallMovement()
                }
            }
        }
           

            

        this.attackCooldown += Time.ms
        this.initialTimmer += Time.ms
    }

    leftWallCollision(){
        if(!Collisions.isCircleInsideRectangleCollisionLeft(170, this.transform.x)){
            this.horzMovement = 1
            this.transform.x -= this.attackSpeed * Time.deltaTime
        } else {
            this.attack = false
            this.horzMovement = 0
            this.attackCooldown = 0
        }
    }

    rightWallCollision(){
        if(!Collisions.isCircleInsideRectangleCollisionRight(window.innerWidth - 170, this.transform.x)){
            this.horzMovement = 2
            this.transform.x += this.attackSpeed * Time.deltaTime

        } else {
            this.attack = false
            this.horzMovement = 0
            this.attackCooldown = 0
        }
    }

    topWallCollision(){
        if(!Collisions.isCircleInsideRectangleCollisionTop(130, this.transform.y)){
            this.vertMovement = 1
            this.transform.y -= this.attackSpeed * Time.deltaTime
        } else {
            this.attack = false
            this.vertMovement = 0
            this.attackCooldown = 0
        }
    }

    bottomWallCollision(){
        if(!Collisions.isCircleInsideRectangleCollisionBottom(window.innerHeight - 130, this.transform.y)){
            this.vertMovement = 2
            this.transform.y += this.attackSpeed * Time.deltaTime

        } else {
            this.attack = false
            this.vertMovement = 0
            this.attackCooldown = 0
        }
    }


    horizontalWallMovement(){
        if(this.horzMovement == 1){
            if(!Collisions.isCircleInsideRectangleCollisionLeft(170, this.transform.x)){
                this.transform.x -= this.idleSpeed * Time.deltaTime
                if(Collisions.isCircleInsideRectangleCollisionLeft(170, this.transform.x)){
                    this.horzMovement = 2
                }
            }
        }
        if(this.horzMovement == 2){
            if(!Collisions.isCircleInsideRectangleCollisionRight(window.innerWidth - 170, this.transform.x)){
                this.transform.x += this.idleSpeed * Time.deltaTime
                if(Collisions.isCircleInsideRectangleCollisionRight(window.innerWidth - 170, this.transform.x)){
                    this.horzMovement = 1
                }
            }
        }
    }


    verticalWallMovement(){
        if(this.vertMovement == 1){
            if(!Collisions.isCircleInsideRectangleCollisionTop(120, this.transform.y)){
                this.transform.y -= this.idleSpeed * Time.deltaTime
                if(Collisions.isCircleInsideRectangleCollisionTop(120, this.transform.y)){
                    this.vertMovement = 2
                }
            }
        }
        if(this.vertMovement == 2){
            if (!Collisions.isCircleInsideRectangleCollisionBottom(window.innerHeight - 120, this.transform.y)){
                this.transform.y += this.idleSpeed * Time.deltaTime
                if(Collisions.isCircleInsideRectangleCollisionBottom(window.innerHeight - 120, this.transform.y)){
                    this.vertMovement = 1
                }
            }
        }
    }

}


    
window.DasherMovementComponent = DasherMovementComponent
export default DasherMovementComponent