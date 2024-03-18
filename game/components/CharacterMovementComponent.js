class CharacterMovementComponent extends Component{
    constructor(){
        super();
        this.cooldown = 1001
    }

    start(){
        this.speed = Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").speed
    }

    update(ctx){
        if (Input.keysDown.includes("ArrowLeft")){
            if(Input.keysDown.includes("Space") && this.cooldown > 1000){
                this.cooldown = 0
                this.transform.x -= 75
                if(Collisions.isCircleInsideRectangleCollisionLeft(170, this.transform.x)){
                    this.transform.x = 170
                }
            } else if(!Collisions.isCircleInsideRectangleCollisionLeft(170, this.transform.x)){
                this.transform.x -= this.speed / Time.fps
            } 
        }

        if (Input.keysDown.includes("ArrowRight")){
            if(Input.keysDown.includes("Space") && this.cooldown > 1000){
                this.cooldown = 0
                this.transform.x += 75
                if(Collisions.isCircleInsideRectangleCollisionRight(window.innerWidth - 170, this.transform.x)){
                    this.transform.x = window.innerWidth - 170
                }
            } else if(!Collisions.isCircleInsideRectangleCollisionRight(window.innerWidth - 170, this.transform.x)){
                this.transform.x += this.speed / Time.fps
            }
        }

        if (Input.keysDown.includes("ArrowUp")){
            if(Input.keysDown.includes("Space") && this.cooldown > 1000){
                this.cooldown = 0
                this.transform.y -= 75
                if(Collisions.isCircleInsideRectangleCollisionTop(120, this.transform.y)){
                    this.transform.y = 120
                }
            } else if(!Collisions.isCircleInsideRectangleCollisionTop(120, this.transform.y)){
                this.transform.y -= this.speed / Time.fps
            }
        }

        if (Input.keysDown.includes("ArrowDown")){
            if(Input.keysDown.includes("Space") && this.cooldown > 1000){
                this.transform.y += 75
                this.cooldown = 0
                if(Collisions.isCircleInsideRectangleCollisionBottom(window.innerHeight - 120, this.transform.y)){
                    this.transform.y = window.innerHeight - 120
                }
            } else if(!Collisions.isCircleInsideRectangleCollisionBottom(window.innerHeight - 120, this.transform.y)){
                this.transform.y += this.transform.downSpeed / Time.fps
            }
        }
        this.cooldown += Time.ms
    }
}

window.CharacterMovementComponent = CharacterMovementComponent
export default CharacterMovementComponent