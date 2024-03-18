class EnterNextRoom extends Component{
    constructor(){
        super()
    }

    start(){
        let floorLayoutObect = Engine.currentScene.gameObjects.find(go=>go.name == "Floor Layout")
        this.floorLayoutComponent = floorLayoutObect.components.find(go=>go.constructor.name == "CreateFloorComponent")
        this.characterObject = Engine.currentScene.gameObjects.find(go=>go.name == "CharacterGameObject")
    }


    update(){
        if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord + 1][this.floorLayoutComponent.currentXCord] == 1){
            //Do specific collisions for the door below 
        }
        
        if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 1){
            //Do specific collisions for the door above
        }
        
        if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord][this.floorLayoutComponent.currentXCord + 1] == 1){
            //Do specific collisions for the door to the right
        }
        
        if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord][this.floorLayoutComponent.currentXCord - 1] == 1){
            //Do specific collisions for the door to the left
        }
    }
}

window.EnterNextRoom = EnterNextRoom
export default EnterNextRoom