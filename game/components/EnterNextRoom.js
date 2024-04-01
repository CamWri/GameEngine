class EnterNextRoom extends Component{
    constructor(centerX, centerY, FloorLocationX, FloorLocationY, characterXSpawn, characterYSpawn, doorDirection){
        super()
        this.centerX = centerX
        this.centerY = centerY
        this.FloorLocationX = FloorLocationX
        this.FloorLocationY = FloorLocationY
        this.characterXSpawn = characterXSpawn
        this.characterYSpawn = characterYSpawn
        this.characterObject = Engine.currentScene.gameObjects.find(go=>go.name == "CharacterGameObject").components.find(go => go.constructor.name == "Transform")
        this.floorLayoutComponent = Globals.floorLayoutObect.components.find(go=>go.constructor.name == "CreateFloorComponent")
    }


    update(){
        let collision = Collisions.isPointCircleCollision({x:this.centerX, y:this.centerY}, {x:this.characterObject.x, y:this.characterObject.y}, 10)

        if(collision){
            Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").startingXCord = this.characterXSpawn
            Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").startingYCord = this.characterYSpawn


            this.floorLayoutComponent.hasVisited.add(`${this.floorLayoutComponent.currentXCord}-${this.floorLayoutComponent.currentYCord}`)


            this.floorLayoutComponent.currentXCord = this.FloorLocationX
            this.floorLayoutComponent.currentYCord = this.FloorLocationY

            Engine.currentScene = new RoomScene()
        }
    }
}

window.EnterNextRoom = EnterNextRoom
export default EnterNextRoom