import "/game/components/BulletEnemyCollisionComponent.js"
import "/game/components/BulletMovementComponent.js"
import "/game/components/CharacterEnemeyCollisionComponent.js"
import "/game/components/CharacterMovementComponent.js"
import "/game/components/CharacterStatsComponent.js"
import "/game/components/ChaserMovementComponent.js"
import "/game/components/CreateBulletComponent.js"
import "/game/components/CreateFloorComponent.js"
import "/game/components/CreateRoomComponent.js"
import "/game/components/DasherMovementComponentLeft.js"
import "/game/components/DasherMovementComponentRight.js"
import "/game/components/EnemeyHealthComponent.js"
import "/game/components/EnterNextRoom.js"
import "/game/components/GetDoorCordinatesComponent.js"
import "/game/components/UpdateScoreComponent.js"



class RoomScene extends Scene {
    constructor() {
        super("black")

        let scoreObject = new GameObject("scoreObject")
        scoreObject.addComponent(new UpdateScoreComponent())
        this.gameObjects.push(scoreObject)

        let roomGameObject = new GameObject("RoomGameObject")
        roomGameObject.addComponent(new CreateRoomComponent())
        this.gameObjects.push(roomGameObject)

        
        let doorGameObject = new GameObject("DoorGameObject")
        doorGameObject.addComponent(new GetDoorCordinatesComponent())
        this.gameObjects.push(doorGameObject)

        let characterGameObject = new GameObject("CharacterGameObject")
        characterGameObject.transform.x = window.innerWidth/2
        characterGameObject.transform.y = window.innerHeight/2
        //Maybe change speed to horizontal and vertical, use negatives for decreasing x and y
        characterGameObject.transform.upSpeed = 200
        characterGameObject.transform.downSpeed = 200
        characterGameObject.transform.leftSpeed = 200
        characterGameObject.transform.rightSpeed = 200
        
        characterGameObject.addComponent(new Circle("green", "purple", 20, 5))//Create the circle component of this object
        characterGameObject.addComponent(new CharacterMovementComponent())//This is the movement
        characterGameObject.addComponent(new CharacterEnemeyCollisionComponent())
        characterGameObject.addComponent(new CreateBulletComponent())
        this.gameObjects.push(characterGameObject)

        let chaserGameObject1 = new GameObject("Chaser1", "EnemeyGameObject")
        chaserGameObject1.transform.x = 250
        chaserGameObject1.transform.y = 250
        chaserGameObject1.addComponent(new Circle("blue", "purple", 20, 5))//Create the circle component of this object
        chaserGameObject1.addComponent(new ChaserMovementComponent())//Create the circle component of this object
        chaserGameObject1.addComponent(new EnemeyHealthComponent(4, 250))
        this.gameObjects.push(chaserGameObject1)

        let chaserGameObject2 = new GameObject("Chaser2", "EnemeyGameObject")
        chaserGameObject2.transform.x = 1250
        chaserGameObject2.transform.y = 500
        chaserGameObject2.addComponent(new Circle("blue", "purple", 20, 5))//Create the circle component of this object
        chaserGameObject2.addComponent(new ChaserMovementComponent())//Create the circle component of this object
        chaserGameObject2.addComponent(new EnemeyHealthComponent(4, 250))
        this.gameObjects.push(chaserGameObject2)

        let dasherGameObject1 = new GameObject("Dasher1", "EnemeyGameObject")
        dasherGameObject1.transform.x = 165
        dasherGameObject1.transform.y = 600
        dasherGameObject1.addComponent(new Circle("yellow", "purple", 15, 0))//Create the circle component of this object
        dasherGameObject1.addComponent(new DasherMovementComponentLeft())
        dasherGameObject1.addComponent(new EnemeyHealthComponent(2, 500))
        this.gameObjects.push(dasherGameObject1)

        let dasherGameObject2 = new GameObject("Dasher2", "EnemeyGameObject")
        dasherGameObject2.transform.x = window.innerWidth - 165
        dasherGameObject2.transform.y = 300
        dasherGameObject2.addComponent(new Circle("yellow", "purple", 15, 0))//Create the circle component of this object
        dasherGameObject2.addComponent(new DasherMovementComponentRight())
        dasherGameObject2.addComponent(new EnemeyHealthComponent(2, 500))
        this.gameObjects.push(dasherGameObject2)
        
        let lifeGameObject1 = new GameObject("lifeGameObject1", "LifeGameObject")
        lifeGameObject1.transform.x = 170
        lifeGameObject1.transform.y = 50
        lifeGameObject1.addComponent(new Circle("red", "white", 20, 1))//Create the circle component of this object
        this.gameObjects.push(lifeGameObject1)

        let lifeGameObject2 = new GameObject("lifeGameObject2", "LifeGameObject")
        lifeGameObject2.transform.x = 110
        lifeGameObject2.transform.y = 50
        lifeGameObject2.addComponent(new Circle("red", "white", 20, 1))//Create the circle component of this object
        this.gameObjects.push(lifeGameObject2)


        let lifeGameObject3 = new GameObject("lifeGameObject3", "LifeGameObject")
        lifeGameObject3.transform.x = 50
        lifeGameObject3.transform.y = 50
        lifeGameObject3.addComponent(new Circle("red", "white", 20, 1))//Create the circle component of this object
        this.gameObjects.push(lifeGameObject3)
    }
}


window.RoomScene = RoomScene
export default RoomScene