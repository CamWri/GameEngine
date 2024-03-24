class GetDoorCordinatesComponent extends Component{
    constructor(){
        super()
    }

    update(){
        this.floorLayoutComponent = Globals.floorLayoutObect.components.find(go=>go.constructor.name == "CreateFloorComponent")
        let allenemylist = Engine.currentScene.gameObjects.find(go=>go.tag == "EnemeyGameObject")
        if(!allenemylist){
            if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] != 0){
                if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 1){
                    GameObject.instantiate(new RegularDoorGameObejct("Door",window.innerWidth/2, 110, 0, -1 ), window.innerWidth/2 - 40, 70)
                } else if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 2){
                    GameObject.instantiate(new StartingRoomDoorGameObject("Door",window.innerWidth/2, 110, 0, -1 ), window.innerWidth/2 - 40, 70)
                } else if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 3){
                    GameObject.instantiate(new ItemRoomDoorGameObject("Door",window.innerWidth/2, 110, 0, -1 ), window.innerWidth/2 - 40, 70)
                } else if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 4){
                    GameObject.instantiate(new EndingRoomGameObject("Door",window.innerWidth/2, 110, 0, -1 ), window.innerWidth/2 - 40, 70)
                }
            }
            
            if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord + 1][this.floorLayoutComponent.currentXCord] != 0){
                if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 1){
                    GameObject.instantiate(new RegularDoorGameObejct("Door", window.innerWidth/2,window.innerHeight - 120, 0, 1), window.innerWidth/2 - 40, window.innerHeight - 100)
                } else if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 2){
                    GameObject.instantiate(new StartingRoomDoorGameObject("Door", window.innerWidth/2,window.innerHeight - 120, 0, 1), window.innerWidth/2 - 40, window.innerHeight - 100)
                } else if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 3){
                    GameObject.instantiate(new ItemRoomDoorGameObject("Door", window.innerWidth/2,window.innerHeight - 120, 0, 1), window.innerWidth/2 - 40, window.innerHeight - 100)
                } else if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 4){
                    GameObject.instantiate(new EndingRoomGameObject("Door", window.innerWidth/2,window.innerHeight - 120, 0, 1), window.innerWidth/2 - 40, window.innerHeight - 100)
                }
            }
            
            if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord][this.floorLayoutComponent.currentXCord - 1] != 0){
                if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 1){
                    GameObject.instantiate(new RegularDoorGameObejct("Door", 160, window.innerHeight/2, -1, 0), 120, window.innerHeight/2 - 40)
                } else if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 2){
                    GameObject.instantiate(new StartingRoomDoorGameObject("Door", 160, window.innerHeight/2, -1, 0), 120, window.innerHeight/2 - 40)
                } else if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 3){
                    GameObject.instantiate(new ItemRoomDoorGameObject("Door", 160, window.innerHeight/2, -1, 0), 120, window.innerHeight/2 - 40)
                } else if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 4){
                    GameObject.instantiate(new EndingRoomGameObject("Door", 160, window.innerHeight/2, -1, 0), 120, window.innerHeight/2 - 40)
                }
            }
            
            if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord][this.floorLayoutComponent.currentXCord + 1] != 0){
                if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 1){
                    GameObject.instantiate(new RegularDoorGameObejct("Door", window.innerWidth - 170, window.innerHeight/2, 1, 0), window.innerWidth - 150, window.innerHeight/2 - 40)
                } else if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 2){
                    GameObject.instantiate(new StartingRoomDoorGameObject("Door", window.innerWidth - 170, window.innerHeight/2, 1, 0), window.innerWidth - 150, window.innerHeight/2 - 40)
                } else if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 3){
                    GameObject.instantiate(new ItemRoomDoorGameObject("Door", window.innerWidth - 170, window.innerHeight/2, 1, 0), window.innerWidth - 150, window.innerHeight/2 - 40)
                } else if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 4){
                    GameObject.instantiate(new EndingRoomGameObject("Door", window.innerWidth - 170, window.innerHeight/2, 1, 0), window.innerWidth - 150, window.innerHeight/2 - 40)
                }
            }
        }
    }
}

window.GetDoorCordinatesComponent = GetDoorCordinatesComponent
export default GetDoorCordinatesComponent