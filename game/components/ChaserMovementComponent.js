class ChaserMovementComponent extends Component{
    constructor(){
        super()
        this.time = 201
        this.moveVertically = false
    }

    start(){
        this.characterObject = Engine.currentScene.gameObjects.find(go=>go.name == "CharacterGameObject")
    }

    update(){
        let speed = 125
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
                this.transform.y -=  speed / Time.fps
            }
            if (this.characterObject.transform.y > this.transform.y){
                this.transform.y +=  speed / Time.fps
            }
        } else {
            if(this.characterObject.transform.x < this.transform.x){
                this.transform.x -=  speed / Time.fps
            }
            if (this.characterObject.transform.x > this.transform.x){
                this.transform.x +=  speed / Time.fps
            }
        }
        
        this.time += Time.ms
    }
}

window.ChaserMovementComponent = ChaserMovementComponent
export default ChaserMovementComponent