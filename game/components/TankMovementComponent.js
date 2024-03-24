class TankMovementComponent extends Component{
    constructor(){
        super()
        this.characterObject = Engine.currentScene.gameObjects.find(go=>go.name == "CharacterGameObject")
    }
    
    start(){
    }

    update(){
        let speed = 50
        if(this.characterObject.transform.y < this.transform.y){
            this.transform.y -=  speed / Time.fps
        }
        if (this.characterObject.transform.y > this.transform.y){
            this.transform.y +=  speed / Time.fps
        }
        if(this.characterObject.transform.x < this.transform.x){
            this.transform.x -=  speed / Time.fps
        }
        if (this.characterObject.transform.x > this.transform.x){
            this.transform.x +=  speed / Time.fps
        }
    }
}

window.TankMovementComponent = TankMovementComponent
export default TankMovementComponent