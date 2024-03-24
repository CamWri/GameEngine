import "/game/components/BulletEnemyCollisionComponent.js"
import "/game/components/BulletMovementComponent.js"
import "/game/components/CharacterEnemeyCollisionComponent.js"
import "/game/components/CharacterMovementComponent.js"
import "/game/components/CharacterStatsComponent.js"
import "/game/components/ChaserMovementComponent.js"
import "/game/components/CreateBulletComponent.js"
import "/game/components/CreateFloorComponent.js"
import "/game/components/CreateRoomComponent.js"
import "/game/components/DasherLeftMovementComponent.js"
import "/game/components/DasherRightMovementComponent.js"
import "/game/components/EnemeyHealthComponent.js"
import "/game/components/EnterNextRoom.js"
import "/game/components/GetDoorCordinatesComponent.js"
import "/game/components/TankMovementComponent.js"
import "/game/components/UpdateScoreComponent.js"

import "/game/prefabs/BulletGameObject.js"
import "/game/prefabs/CharacterGameObject.js"
import "/game/prefabs/ChaserGameObject.js"
import "/game/prefabs/DasherGameObject.js"
import "/game/prefabs/DasherLeftGameObject.js"
import "/game/prefabs/DasherRightGameObject.js"
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

        GameObject.instantiate(new CharacterGameObject("CharacterGameObject"), window.innerWidth/2, window.innerHeight/2)

        //GameObject.instantiate(new BulletGameObject("BulletGameObject", 1), 200, 700)


        GameObject.instantiate(new LifeGameObject("lifeGameObject1", "LifeGameObject"), 170, 50)
        GameObject.instantiate(new LifeGameObject("lifeGameObject2", "LifeGameObject"), 110, 50)
        GameObject.instantiate(new LifeGameObject("lifeGameObject3", "LifeGameObject"), 50, 50)

        //GameObject.instantiate(new ChaserGameObject("Chaser1", "EnemeyGameObject"), 250, 250)
        //GameObject.instantiate(new ChaserGameObject("Chaser2", "EnemeyGameObject"), 1250, 500)

        //GameObject.instantiate(new DasherLeftGameObject("Dasher1", "EnemeyGameObject"), 165, 600)
        //GameObject.instantiate(new DasherRightGameObject("Dasher2", "EnemeyGameObject"), window.innerWidth - 165, 300)

        //GameObject.instantiate(new TankGameObject("Tank1", "EnemeyGameObject"), 700, 200)   
    }
}


window.RoomScene = RoomScene
export default RoomScene