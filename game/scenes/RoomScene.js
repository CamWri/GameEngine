import "/game/components/AcidGunnerMovementComponent.js"
import "/game/components/AcidPoolDuractionComponent.js"
import "/game/components/AcidShotMovementComponent.js"
import "/game/components/AssignRoomEnemiesComponent.js"
import "/game/components/BulletEnemyCollisionComponent.js"
import "/game/components/BulletMovementComponent.js"
import "/game/components/CharacterEnemeyCollisionComponent.js"
import "/game/components/CharacterItemCollisionComponent.js"
import "/game/components/CharacterMovementComponent.js"
import "/game/components/CharacterStatsComponent.js"
import "/game/components/ChargerMovementComponent.js"
import "/game/components/ChaserMovementComponent.js"
import "/game/components/CreateAcidShotComponent.js"
import "/game/components/CreateBulletComponent.js"
import "/game/components/CreateEnemeyBulleteComponent.js"
import "/game/components/CreateFloorComponent.js"
import "/game/components/CreateRoomComponent.js"
import "/game/components/DasherMovementComponent.js"
import "/game/components/EnemeyHealthComponent.js"
import "/game/components/EnemyBulletMovementComponent.js"
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
import "/game/prefabs/TurretGameObject.js"
import "/game/prefabs/VeggieSmoothieItemGameObject.js"

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
        enemeyControllerGameObject.addComponent(new AssignRoomEnemiesComponent())
        GameObject.instantiate(enemeyControllerGameObject)  


        GameObject.instantiate(new VeggieSmoothieItemGameObject("Veggie Smoothie", "Item"), 500, 500)
    }
}


window.RoomScene = RoomScene
export default RoomScene