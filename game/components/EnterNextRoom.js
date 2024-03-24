class EnterNextRoom extends Component{
    constructor(centerX, centerY, XFloorCord, YFloorCord){
        super()
        this.centerX = centerX
        this.centerY = centerY
        this.XFloorCord = XFloorCord
        this.YFloorCord = YFloorCord
    }


    update(){
        this.characterObject = Engine.currentScene.gameObjects.find(go=>go.name == "CharacterGameObject")
        this.floorLayoutComponent = Globals.floorLayoutObect.components.find(go=>go.constructor.name == "CreateFloorComponent")

        let collision = Collisions.isPointCircleCollision({x:this.centerX, y:this.centerY}, {x:this.characterObject.transform.x, y:this.characterObject.transform.y}, 10)

        if(collision){
            this.floorLayoutComponent.currentYCord += this.YFloorCord
            this.floorLayoutComponent.currentXCord += this.XFloorCord

            Engine.currentScene = new RoomScene()
        }
    }
}

window.EnterNextRoom = EnterNextRoom
export default EnterNextRoom