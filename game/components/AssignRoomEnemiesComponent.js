class AssignRoomEnemiesComponent extends Component{
    constructor(){
        super()
        this.floorLayoutComponent = Globals.floorLayoutObect.components.find(go=>go.constructor.name == "CreateFloorComponent")
        if (!this.floorLayoutComponent.hasVisited.has(`${this.floorLayoutComponent.currentXCord}-${this.floorLayoutComponent.currentYCord}`)){
            if(this.floorLayoutComponent.currentXCord == this.floorLayoutComponent.startingRoomX && this.floorLayoutComponent.currentYCord == this.floorLayoutComponent.startingRoomY){
                //Starting room
            } else if(this.floorLayoutComponent.currentXCord == this.floorLayoutComponent.endingRoomX && this.floorLayoutComponent.currentYCord == this.floorLayoutComponent.endingRoomY){
                //ending room
            } else if(this.floorLayoutComponent.currentXCord == this.floorLayoutComponent.itemRoomX && this.floorLayoutComponent.currentYCord == this.floorLayoutComponent.itemRoomY){
                //item room
            } else {
                let number = Math.floor(Math.random() * 15) + 1
                switch (number) {
                    case 1:
                        GameObject.instantiate(new TurretGameObject("Turret1", "EnemeyGameObject"), 250, 250)
                        GameObject.instantiate(new TurretGameObject("Turret2", "EnemeyGameObject"), window.innerWidth - 250, window.innerHeight - 250)
                        GameObject.instantiate(new TurretGameObject("Turret3", "EnemeyGameObject"), 250, window.innerHeight - 250)
                        GameObject.instantiate(new TurretGameObject("Turret4", "EnemeyGameObject"), window.innerWidth - 250,  250)
                        GameObject.instantiate(new ChaserGameObject("Chaser1", "EnemeyGameObject"), window.innerWidth/2, window.innerHeight/2)
                        break;
                    case 2:
                        GameObject.instantiate(new ChaserGameObject("Chaser1", "EnemeyGameObject"), window.innerWidth/2 - 40, window.innerHeight/2 - 40)
                        GameObject.instantiate(new ChaserGameObject("Chaser2", "EnemeyGameObject"), window.innerWidth/2 + 40, window.innerHeight/2 - 40)
                        GameObject.instantiate(new ChaserGameObject("Chaser3", "EnemeyGameObject"), window.innerWidth/2 - 40, window.innerHeight/2 + 40)
                        GameObject.instantiate(new ChaserGameObject("Chaser4", "EnemeyGameObject"), window.innerWidth/2 + 40, window.innerHeight/2 + 40)
                        break;
                    case 3:
                        GameObject.instantiate(new DasherGameObject("Dasher1", "EnemeyGameObject", "left"), 165, window.innerHeight/4)
                        GameObject.instantiate(new DasherGameObject("Dasher2", "EnemeyGameObject", "left"), 165, window.innerHeight - window.innerHeight/4)
                        GameObject.instantiate(new TurretGameObject("Turret1", "EnemeyGameObject"), window.innerWidth - 300, window.innerHeight/4)
                        GameObject.instantiate(new TurretGameObject("Turret1", "EnemeyGameObject"), window.innerWidth - 300, window.innerHeight - window.innerHeight/4)
                        break;
                    case 4:
                        GameObject.instantiate(new DasherGameObject("Dasher2", "EnemeyGameObject", "right"), window.innerWidth - 165, window.innerHeight/4)
                        GameObject.instantiate(new DasherGameObject("Dasher2", "EnemeyGameObject", "right"), window.innerWidth - 165, window.innerHeight - window.innerHeight/4)
                        GameObject.instantiate(new TurretGameObject("Turret1", "EnemeyGameObject"), 300, window.innerHeight/4)
                        GameObject.instantiate(new TurretGameObject("Turret1", "EnemeyGameObject"), 300, window.innerHeight - window.innerHeight/4)
                        break;
                    case 5:
                        GameObject.instantiate(new AcidGunnerGameObject("AcidGunner1", "EnemeyGameObject"), window.innerWidth/4, window.innerHeight - window.innerHeight/4)
                        GameObject.instantiate(new AcidGunnerGameObject("AcidGunner2", "EnemeyGameObject"), window.innerWidth - window.innerWidth/4, window.innerHeight/4)
                        break;
                    case 6:
                        GameObject.instantiate(new DasherGameObject("Dasher1", "EnemeyGameObject", "left"), 165, 300)
                        GameObject.instantiate(new DasherGameObject("Dasher2", "EnemeyGameObject", "right"), window.innerWidth - 165, 600)
                        GameObject.instantiate(new DasherGameObject("Dasher3", "EnemeyGameObject", "top"), 400, 120)
                        break;
                    case 7:
                        GameObject.instantiate(new DasherGameObject("Dasher1", "EnemeyGameObject", "left"), 165, 300)
                        GameObject.instantiate(new DasherGameObject("Dasher2", "EnemeyGameObject", "right"), window.innerWidth - 165, 600)
                        GameObject.instantiate(new DasherGameObject("Dasher3", "EnemeyGameObject", "bottom"), 900, window.innerHeight - 120)
                        break;
                    case 8:
                        GameObject.instantiate(new DasherGameObject("Dasher1", "EnemeyGameObject", "left"), 165, 300)
                        GameObject.instantiate(new DasherGameObject("Dasher2", "EnemeyGameObject", "top"), 400, 120)
                        GameObject.instantiate(new DasherGameObject("Dasher3", "EnemeyGameObject", "bottom"), 900, window.innerHeight - 120)
                        break;
                    case 9:
                        GameObject.instantiate(new DasherGameObject("Dasher1", "EnemeyGameObject", "right"), window.innerWidth - 165, 600)
                        GameObject.instantiate(new DasherGameObject("Dasher2", "EnemeyGameObject", "top"), 400, 120)
                        GameObject.instantiate(new DasherGameObject("Dasher3", "EnemeyGameObject", "bottom"), 900, window.innerHeight - 120)
                        break;
                    case 10:
                        GameObject.instantiate(new AcidGunnerGameObject("AcidGunner1", "EnemeyGameObject"), window.innerWidth/2, window.innerHeight/2)
                        GameObject.instantiate(new TurretGameObject("Turret1", "EnemeyGameObject"), 250, 250)
                        GameObject.instantiate(new TurretGameObject("Turret2", "EnemeyGameObject"), 250, window.innerHeight - 250)
                        break;
                    case 11:
                        GameObject.instantiate(new AcidGunnerGameObject("AcidGunner1", "EnemeyGameObject"), window.innerWidth/2, window.innerHeight/2)
                        GameObject.instantiate(new TurretGameObject("Turret1", "EnemeyGameObject"), window.innerWidth - 250, window.innerHeight - 250)
                        GameObject.instantiate(new TurretGameObject("Turret2", "EnemeyGameObject"), window.innerWidth - 250,  250)
                        break;
                    case 12:
                        GameObject.instantiate(new ChargerGameObject("Charger1", "EnemeyGameObject"), window.innerWidth/4, window.innerHeight - window.innerHeight/4)
                        GameObject.instantiate(new ChargerGameObject("Charger2", "EnemeyGameObject"), window.innerWidth - window.innerWidth/4, window.innerHeight/4)
                        break;
                    case 13:
                        GameObject.instantiate(new ChargerGameObject("Charger1", "EnemeyGameObject"), window.innerWidth/2, window.innerHeight/2)
                        GameObject.instantiate(new ChaserGameObject("Chaser1", "EnemeyGameObject"), window.innerWidth/2 - 80, window.innerHeight/2 - 80)
                        GameObject.instantiate(new ChaserGameObject("Chaser2", "EnemeyGameObject"), window.innerWidth/2 + 80, window.innerHeight/2 - 80)
                        break;
                    case 14:
                        GameObject.instantiate(new TurretGameObject("Turret1", "EnemeyGameObject"), window.innerWidth/2, window.innerHeight/4)
                        GameObject.instantiate(new TurretGameObject("Turret2", "EnemeyGameObject"), window.innerWidth/2, window.innerHeight - window.innerHeight/4)
                        GameObject.instantiate(new ChargerGameObject("Charger1", "EnemeyGameObject"), window.innerWidth/2, window.innerHeight/2)
                        break;
                    case 15:
                        GameObject.instantiate(new DasherGameObject("Dasher1", "EnemeyGameObject", "top"), 400, 120)
                        GameObject.instantiate(new DasherGameObject("Dasher2", "EnemeyGameObject", "bottom"), 900, window.innerHeight - 120)
                        GameObject.instantiate(new AcidGunnerGameObject("AcidGunner1", "EnemeyGameObject"), window.innerWidth/2, window.innerHeight/2)
                        break;
                    default:
                        console.log("The number is not between 1 and 15.");
                }
            }
        }
    }
}

window.AssignRoomEnemiesComponent = AssignRoomEnemiesComponent
export default AssignRoomEnemiesComponent