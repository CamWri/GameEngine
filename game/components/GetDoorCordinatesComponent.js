class GetDoorCordinatesComponent extends Component{
    constructor(){
        super()
        this.floorLayoutComponent = Globals.floorLayoutObect.components.find(go=>go.constructor.name == "CreateFloorComponent")
    }

    update(){
        let floorYCord = this.floorLayoutComponent.currentYCord
        let floorXCord = this.floorLayoutComponent.currentXCord
        this.allenemylist = Engine.currentScene.gameObjects.find(go=>go.tag == "EnemeyGameObject")

        if(!this.allenemylist){
            if(this.floorLayoutComponent.floorLayout[floorYCord - 1][floorXCord] != 0){
                let topDoorGameObject = new GameObject("Door")
                topDoorGameObject.transform.x = window.innerWidth/2 - 40
                topDoorGameObject.transform.y = 70
                topDoorGameObject.addComponent(new EnterNextRoom(window.innerWidth/2, 100, floorXCord, floorYCord-1, window.innerWidth/2, window.innerHeight - 130))
                if(this.floorLayoutComponent.floorLayout[floorYCord - 1][floorXCord] == 1){
                    topDoorGameObject.addComponent(new Rectangle("darkgoldenrod", "black", 80, 30))
                    //GameObject.instantiate(new RegularDoorGameObejct("Door",window.innerWidth/2, 110, 0, -1 ), window.innerWidth/2 - 40, 70)
                } else if(this.floorLayoutComponent.floorLayout[floorYCord - 1][floorXCord] == 2){
                    topDoorGameObject.addComponent(new Rectangle("yellow", "black", 80, 30))
                    //GameObject.instantiate(new StartingRoomDoorGameObject("Door",window.innerWidth/2, 110, 0, -1 ), window.innerWidth/2 - 40, 70)
                } else if(this.floorLayoutComponent.floorLayout[floorYCord - 1][floorXCord] == 3){
                    topDoorGameObject.addComponent(new Rectangle("powderblue", "black", 80, 30))
                    //GameObject.instantiate(new ItemRoomDoorGameObject("Door",window.innerWidth/2, 110, 0, -1 ), window.innerWidth/2 - 40, 70)
                } else if(this.floorLayoutComponent.floorLayout[floorYCord - 1][floorXCord] == 4){
                    topDoorGameObject.addComponent(new Rectangle("darkred", "black", 80, 30))
                    //GameObject.instantiate(new EndingRoomGameObject("Door",window.innerWidth/2, 110, 0, -1 ), window.innerWidth/2 - 40, 70)
                }
                Engine.currentScene.gameObjects.push(topDoorGameObject)
            }
            
            if(this.floorLayoutComponent.floorLayout[floorYCord + 1][floorXCord] != 0){         
                let bottomDoorGameObject = new GameObject("Door")
                bottomDoorGameObject.transform.x = window.innerWidth/2 - 40
                bottomDoorGameObject.transform.y = window.innerHeight - 100  
                bottomDoorGameObject.addComponent(new EnterNextRoom(window.innerWidth/2, window.innerHeight - 100, floorXCord, floorYCord+1, window.innerWidth/2, 130))   
                if(this.floorLayoutComponent.floorLayout[floorYCord + 1][floorXCord] == 1){
                    bottomDoorGameObject.addComponent(new Rectangle("darkgoldenrod", "black", 80, 30))
                    //GameObject.instantiate(new RegularDoorGameObejct("Door", window.innerWidth/2,window.innerHeight - 120, 0, 1), window.innerWidth/2 - 40, window.innerHeight - 100)
                } else if(this.floorLayoutComponent.floorLayout[floorYCord + 1][floorXCord] == 2){
                    bottomDoorGameObject.addComponent(new Rectangle("yellow", "black", 80, 30))
                    //GameObject.instantiate(new StartingRoomDoorGameObject("Door", window.innerWidth/2,window.innerHeight - 120, 0, 1), window.innerWidth/2 - 40, window.innerHeight - 100)
                } else if(this.floorLayoutComponent.floorLayout[floorYCord + 1][floorXCord] == 3){
                    bottomDoorGameObject.addComponent(new Rectangle("powderblue", "black", 80, 30))
                    //GameObject.instantiate(new ItemRoomDoorGameObject("Door", window.innerWidth/2,window.innerHeight - 120, 0, 1), window.innerWidth/2 - 40, window.innerHeight - 100)
                } else if(this.floorLayoutComponent.floorLayout[floorYCord + 1][floorXCord] == 4){
                    bottomDoorGameObject.addComponent(new Rectangle("darkred", "black", 80, 30))
                    //GameObject.instantiate(new EndingRoomGameObject("Door", window.innerWidth/2,window.innerHeight - 120, 0, 1), window.innerWidth/2 - 40, window.innerHeight - 100)
                }
                Engine.currentScene.gameObjects.push(bottomDoorGameObject)
            }
            
            if(this.floorLayoutComponent.floorLayout[floorYCord][floorXCord - 1] != 0){
                let leftDoorGameObject = new GameObject("Door")
                leftDoorGameObject.transform.x = 120
                leftDoorGameObject.transform.y = window.innerHeight/2 - 41
                leftDoorGameObject.addComponent(new EnterNextRoom(150, window.innerHeight/2, floorXCord-1, floorYCord, window.innerWidth - 180 ,window.innerHeight/2))
                if(this.floorLayoutComponent.floorLayout[floorYCord][floorXCord - 1] == 1){
                    leftDoorGameObject.addComponent(new Rectangle("darkgoldenrod", "black", 30, 80))
                    //GameObject.instantiate(new RegularDoorGameObejct("Door", 160, window.innerHeight/2, -1, 0), 120, window.innerHeight/2 - 40)
                } else if(this.floorLayoutComponent.floorLayout[floorYCord][floorXCord - 1] == 2){
                    leftDoorGameObject.addComponent(new Rectangle("yellow", "black", 30, 80))
                    //GameObject.instantiate(new StartingRoomDoorGameObject("Door", 160, window.innerHeight/2, -1, 0), 120, window.innerHeight/2 - 40)
                } else if(this.floorLayoutComponent.floorLayout[floorYCord][floorXCord - 1] == 3){
                    leftDoorGameObject.addComponent(new Rectangle("powderblue", "black", 30, 80))
                    //GameObject.instantiate(new ItemRoomDoorGameObject("Door", 160, window.innerHeight/2, -1, 0), 120, window.innerHeight/2 - 40)
                } else if(this.floorLayoutComponent.floorLayout[floorYCord][floorXCord - 1] == 4){
                    leftDoorGameObject.addComponent(new Rectangle("darkred", "black", 30, 80))
                    //GameObject.instantiate(new EndingRoomGameObject("Door", 160, window.innerHeight/2, -1, 0), 120, window.innerHeight/2 - 40)
                }
                Engine.currentScene.gameObjects.push(leftDoorGameObject)
            }
            
            if(this.floorLayoutComponent.floorLayout[floorYCord][floorXCord + 1] != 0){
                let rightDoorGameObject = new GameObject("Door")
                rightDoorGameObject.transform.x = window.innerWidth - 150
                rightDoorGameObject.transform.y = window.innerHeight/2 - 40
                rightDoorGameObject.addComponent(new EnterNextRoom(window.innerWidth - 160, window.innerHeight/2, floorXCord+1, floorYCord, 180 ,window.innerHeight/2))
                if(this.floorLayoutComponent.floorLayout[floorYCord][floorXCord + 1] == 1){
                    rightDoorGameObject.addComponent(new Rectangle("darkgoldenrod", "black", 30, 80))
                    //GameObject.instantiate(new RegularDoorGameObejct("Door", window.innerWidth - 170, window.innerHeight/2, 1, 0), window.innerWidth - 150, window.innerHeight/2 - 40)
                } else if(this.floorLayoutComponent.floorLayout[floorYCord][floorXCord + 1] == 2){                    
                    rightDoorGameObject.addComponent(new Rectangle("yellow", "black", 30, 80))
                    //GameObject.instantiate(new StartingRoomDoorGameObject("Door", window.innerWidth - 170, window.innerHeight/2, 1, 0), window.innerWidth - 150, window.innerHeight/2 - 40)
                } else if(this.floorLayoutComponent.floorLayout[floorYCord][floorXCord + 1] == 3){
                    rightDoorGameObject.addComponent(new Rectangle("powderblue", "black", 30, 80))
                    //GameObject.instantiate(new ItemRoomDoorGameObject("Door", window.innerWidth - 170, window.innerHeight/2, 1, 0), window.innerWidth - 150, window.innerHeight/2 - 40)
                } else if(this.floorLayoutComponent.floorLayout[floorYCord][floorXCord + 1] == 4){
                    rightDoorGameObject.addComponent(new Rectangle("darkred", "black", 30, 80))
                    //GameObject.instantiate(new EndingRoomGameObject("Door", window.innerWidth - 170, window.innerHeight/2, 1, 0), window.innerWidth - 150, window.innerHeight/2 - 40)
                }
                Engine.currentScene.gameObjects.push(rightDoorGameObject)
            }
        }
    }
}

window.GetDoorCordinatesComponent = GetDoorCordinatesComponent
export default GetDoorCordinatesComponent