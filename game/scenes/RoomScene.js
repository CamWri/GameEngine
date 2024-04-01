import "/game/components/AcidGunnerMovementComponent.js"
import "/game/components/AcidPoolDuractionComponent.js"
import "/game/components/AcidShotMovementComponent.js"
import "/game/components/BulletEnemyCollisionComponent.js"
import "/game/components/BulletMovementComponent.js"
import "/game/components/CharacterEnemeyCollisionComponent.js"
import "/game/components/CharacterMovementComponent.js"
import "/game/components/CharacterStatsComponent.js"
import "/game/components/ChargerMovementComponent.js"
import "/game/components/ChaserMovementComponent.js"
import "/game/components/CreateAcidShotComponent.js"
import "/game/components/CreateBulletComponent.js"
import "/game/components/CreateFloorComponent.js"
import "/game/components/CreateRoomComponent.js"
import "/game/components/DasherMovementComponent.js"
import "/game/components/EnemeyHealthComponent.js"
import "/game/components/EnterNextRoom.js"
import "/game/components/GetDoorCordinatesComponent.js"
import "/game/components/HealthControllerComponent.js"
import "/game/components/TankAttackControllerComponent.js"
import "/game/components/TankMovementComponent.js"
import "/game/components/UpdateScoreComponent.js"

import "/game/prefabs/AcidGunnerGameObject.js"
import "/game/prefabs/AcidShotGameObject.js"
import "/game/prefabs/BulletGameObject.js"
import "/game/prefabs/CharacterGameObject.js"
import "/game/prefabs/ChargerGameObject.js"
import "/game/prefabs/ChaserGameObject.js"
import "/game/prefabs/DasherGameObject.js"
import "/game/prefabs/EndingRoomGameObject.js"
import "/game/prefabs/ItemRoomDoorGameObject.js"
import "/game/prefabs/LifeGameObject.js"
import "/game/prefabs/RegularDoorGameObject.js"
import "/game/prefabs/StartingRoomDoorGameObject.js"
import "/game/prefabs/TankGameObject.js"




class RoomScene extends Scene {
    constructor() {
        super("black")
    }

    start(ctx){
        let scoreObject = new GameObject("scoreObject")
        scoreObject.addComponent(new UpdateScoreComponent())
        GameObject.instantiate(scoreObject)

        let roomGameObject = new GameObject("RoomGameObject")
        roomGameObject.addComponent(new CreateRoomComponent())
        GameObject.instantiate(roomGameObject)

        let doorControlerGameObject = new GameObject("DoorGameObject")
        doorControlerGameObject.addComponent(new GetDoorCordinatesComponent())
        GameObject.instantiate(doorControlerGameObject)

        GameObject.instantiate(new CharacterGameObject("CharacterGameObject"),Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").startingXCord, Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").startingYCord)

        let healthControllerGameObject = new GameObject("HealthControllerObject")
        healthControllerGameObject.addComponent(new HealthControllerComponent())
        GameObject.instantiate(healthControllerGameObject)


        let enemeyControllerGameObject = new GameObject("EnemeyControllerGameObject")

        GameObject.instantiate(enemeyControllerGameObject)

        //GameObject.instantiate(new ChaserGameObject("Chaser1", "EnemeyGameObject"), 250, 250)
        //GameObject.instantiate(new ChaserGameObject("Chaser2", "EnemeyGameObject"), 1250, 500)
     
        //GameObject.instantiate(new DasherGameObject("Dasher1", "EnemeyGameObject", "left"), 165, 300)
        //GameObject.instantiate(new DasherGameObject("Dasher2", "EnemeyGameObject", "right"), window.innerWidth - 165, 600)
        //GameObject.instantiate(new DasherGameObject("Dasher3", "EnemeyGameObject", "top"), 400, 120)
        //GameObject.instantiate(new DasherGameObject("Dasher4", "EnemeyGameObject", "bottom"), 800, window.innerHeight - 120)

        GameObject.instantiate(new AcidGunnerGameObject("AcidGunner1", "EnemeyGameObject"), 600, 600)

        //GameObject.instantiate(new TankGameObject("Tank1", "EnemeyGameObject"), 700, 200)   
        //GameObject.instantiate(new TankGameObject("Tank1", "EnemeyGameObject"), 500, 400) 
        
        //GameObject.instantiate(new ChargerGameObject("Charger1", "EnemeyGameObject"), 700, 200)   
        //GameObject.instantiate(new ChargerGameObject("Charger2", "EnemeyGameObject"), 200, 600)   
    }
}


window.RoomScene = RoomScene
export default RoomScene