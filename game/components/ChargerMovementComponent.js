class ChargerMovementComponent extends Component{
    constructor(){
        super()
        this.time = 201
        this.moveVertically = false
        this.characterObject = Engine.currentScene.gameObjects.find(go=>go.name == "CharacterGameObject")
        this.speed = 50
        this.maxSpeedCounter = 0
        this.restCounter = 0
    }

    update(){
        if(this.speed <= 250 && this.maxSpeedCounter < 2000){
            if(this.time > 200){
                if(Math.random() > 0.5){
                    this.moveVertically = true
                } else {
                    this.moveVertically = false
                }
                this.time = 0
            }

            if(Math.random() > 0.5){
                if(this.characterObject.transform.y == this.transform.y){
                    this.moveVertically = false
                } else if (this.characterObject.transform.x == this.transform.x){
                    this.moveVertically = true
                }
            }

            if(this.moveVertically){
                if(this.characterObject.transform.y < this.transform.y){
                    this.transform.y -=  this.speed * Time.deltaTime
                }
                if (this.characterObject.transform.y > this.transform.y){
                    this.transform.y +=  this.speed * Time.deltaTime
                }
            } else {
                if(this.characterObject.transform.x < this.transform.x){
                    this.transform.x -=  this.speed * Time.deltaTime
                }
                if (this.characterObject.transform.x > this.transform.x){
                    this.transform.x +=  this.speed * Time.deltaTime
                }
            }
            if(this.speed < 250){
                this.speed += 0.50
            } else if (this.speed == 250){
                this.maxSpeedCounter += Time.ms
                this.restCounter = 0
            }
        } else {
            this.restCounter += Time.ms
            if(this.restCounter > 5000){
                this.maxSpeedCounter = 0
                this.speed = 50
            }
        }
        this.time += Time.ms
    }
}

window.ChargerMovementComponent = ChargerMovementComponent
export default ChargerMovementComponent