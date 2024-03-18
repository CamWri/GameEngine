class GetDoorCordinatesComponent extends Component{
    constructor(){
        super()
    }

    start(){
        this.floorLayoutComponent = Globals.floorLayoutObect.components.find(go=>go.constructor.name == "CreateFloorComponent")
    }

    update(){
        let allenemylist = Engine.currentScene.gameObjects.find(go=>go.tag == "EnemeyGameObject")
        if(!allenemylist){
            if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord - 1][this.floorLayoutComponent.currentXCord] == 1){
                this.parent.transform.x = window.innerWidth/2 - 75
                this.parent.transform.y = 90
                this.parent.addComponent(new Rectangle("yellow", "black", 150, 30))
            }
            
            if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord + 1][this.floorLayoutComponent.currentXCord] == 1){
                this.parent.transform.x = window.innerWidth/2 - 75
                this.parent.transform.y = window.innerHeight - 120
                this.parent.addComponent(new Rectangle("yellow", "black", 150, 30))

            }
            
            if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord][this.floorLayoutComponent.currentXCord - 1] == 1){
                this.parent.transform.x = 140
                this.parent.transform.y = window.innerHeight/2 - 75
                this.parent.addComponent(new Rectangle("yellow", "black", 30, 150))
            }
            
            if(this.floorLayoutComponent.floorLayout[this.floorLayoutComponent.currentYCord][this.floorLayoutComponent.currentXCord + 1] == 1){
                this.parent.transform.x = window.innerWidth - 170
                this.parent.transform.y = window.innerHeight/2 - 75
                this.parent.addComponent(new Rectangle("yellow", "black", 30, 150))
            }
        }
    }
}

window.GetDoorCordinatesComponent = GetDoorCordinatesComponent
export default GetDoorCordinatesComponent