class EnterNextRoom extends Component{
    constructor(centerX, centerY, FloorLocationX, FloorLocationY, characterXSpawn, characterYSpawn){
        super()
        this.centerX = centerX
        this.centerY = centerY
        this.FloorLocationX = FloorLocationX
        this.FloorLocationY = FloorLocationY
        this.characterXSpawn = characterXSpawn
        this.characterYSpawn = characterYSpawn
        this.characterObject = Engine.currentScene.gameObjects.find(go=>go.name == "CharacterGameObject")
        this.floorLayoutComponent = Globals.floorLayoutObect.components.find(go=>go.constructor.name == "CreateFloorComponent")
        this.floorLayoutComponent.hasVisited.add(`${this.floorLayoutComponent.currentXCord}-${this.floorLayoutComponent.currentYCord}`)
    }


    update(){
        let playerCircle = new Circle2(this.characterObject.components.find((go => go.constructor.name == "Transform")).x, this.characterObject.components.find((go => go.constructor.name == "Transform")).y, 20)

        let vector1 = null;
        let vector2 = null;

        if(this.centerX == window.innerWidth/2){
            vector1 = new Vector2(this.centerX - 30, this.centerY)
            vector2 = new Vector2(this.centerX + 30, this.centerY )
        } else {
            vector1 = new Vector2(this.centerX, this.centerY - 30)
            vector2 = new Vector2(this.centerX, this.centerY + 30)
        }

        let doorLine = new Line2(vector1, vector2)        


        let collision = CollisionsGeometric.isCircle2Line2Collision(playerCircle, doorLine)
        
        if(collision){
            Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").startingXCord = this.characterXSpawn
            Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").startingYCord = this.characterYSpawn

            this.floorLayoutComponent.currentXCord = this.FloorLocationX
            this.floorLayoutComponent.currentYCord = this.FloorLocationY

            Engine.currentScene = new RoomScene()
        }
    }
}

window.EnterNextRoom = EnterNextRoom
export default EnterNextRoom