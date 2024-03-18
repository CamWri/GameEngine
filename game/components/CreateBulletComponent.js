class CreateBulletComponent extends Component{
    constructor(){
        super()
    }

    start(){
        this.time = 501
    }

    update(ctx){
        if(Input.keysDown.includes("KeyW") || Input.keysDown.includes("KeyD") || Input.keysDown.includes("KeyS") || Input.keysDown.includes("KeyA")){
            if(this.time > 500){
                let direction = 0

                let bulletGameObject = new GameObject("BulletGameObject");
                bulletGameObject.transform.x = this.transform.x
                bulletGameObject.transform.y = this.transform.y

                if(Input.keysDown.includes("KeyW")){
                    direction = 1
                    bulletGameObject.transform.y -= 30
                } else if (Input.keysDown.includes("KeyD")){
                    direction = 2
                    bulletGameObject.transform.x += 30
                } else if (Input.keysDown.includes("KeyS")){
                    direction = 3
                    bulletGameObject.transform.y += 30
                } else {
                    direction = 4
                    bulletGameObject.transform.x -= 30

                }
                bulletGameObject.addComponent(new Circle("blue", "blue", 2, 1))//Create the circle component of this object
                bulletGameObject.addComponent(new BulletMovementComponent(direction))//Create the circle component of this object
                bulletGameObject.addComponent(new BulletEnemeyCollisionComponent())
                //Engine.currentScene.gameObjects.push(bulletGameObject);
                GameObject.instantiate(bulletGameObject)
                this.time = 0
            }
        }
        this.time += Time.ms
    }
}

window.CreateBulletComponent = CreateBulletComponent
export default CreateBulletComponent