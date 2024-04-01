class AcidGunnerMovementComponent extends Component{
    constructor(){
        super()
        this.time = 201
        this.moveVertically = false
        this.characterObject = Engine.currentScene.gameObjects.find(go=>go.name == "CharacterGameObject")
    }

    start(){
    }

    update(){
        let speed = 100

        if(Math.abs(this.characterObject.transform.y - this.transform.y) < 10 || Math.abs(this.characterObject.transform.x - this.transform.x) < 10){
            speed = 0
        }

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
                this.transform.y -=  speed * Time.deltaTime
            }
            if (this.characterObject.transform.y > this.transform.y){
                this.transform.y +=  speed * Time.deltaTime
            }
        } else {
            if(this.characterObject.transform.x < this.transform.x){
                this.transform.x -=  speed * Time.deltaTime
            }
            if (this.characterObject.transform.x > this.transform.x){
                this.transform.x +=  speed * Time.deltaTime
            }
        }
        
        this.time += Time.ms
    }
}

window.AcidGunnerMovementComponent = AcidGunnerMovementComponent
export default AcidGunnerMovementComponent