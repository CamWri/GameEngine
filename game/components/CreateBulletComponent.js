class CreateBulletComponent extends Component{
    constructor(){
        super()
        this.time = 501
    }

    update(ctx){
        if(Input.keysDown.includes("KeyW") || Input.keysDown.includes("KeyD") || Input.keysDown.includes("KeyS") || Input.keysDown.includes("KeyA")){
            if(this.time > 500){
                if(Input.keysDown.includes("KeyW")){
                    let bulletGameObject = new GameObject("BulletGameObject")
                    bulletGameObject.addComponent(new Circle("blue", "blue", 2, 1))//Create the circle component of this object
                    bulletGameObject.addComponent(new BulletMovementComponent(1))//Create the circle component of this object
                    bulletGameObject.addComponent(new BulletEnemeyCollisionComponent())
                    GameObject.instantiate(bulletGameObject, this.transform.x, this.transform.y - 30)
                    //GameObject.instantiate(new BulletGameObject("BulletGameObject", 1), this.transform.x, this.transform.y - 30)
                } else if (Input.keysDown.includes("KeyD")){
                    let bulletGameObject = new GameObject("BulletGameObject")
                    bulletGameObject.addComponent(new Circle("blue", "blue", 2, 1))//Create the circle component of this object
                    bulletGameObject.addComponent(new BulletMovementComponent(2))//Create the circle component of this object
                    bulletGameObject.addComponent(new BulletEnemeyCollisionComponent())
                    GameObject.instantiate(bulletGameObject, this.transform.x + 30, this.transform.y)
                    //GameObject.instantiate(new BulletGameObject("BulletGameObject", 2), this.transform.x + 30, this.transform.y)
                } else if (Input.keysDown.includes("KeyS")){
                    let bulletGameObject = new GameObject("BulletGameObject")
                    bulletGameObject.addComponent(new Circle("blue", "blue", 2, 1))//Create the circle component of this object
                    bulletGameObject.addComponent(new BulletMovementComponent(3))//Create the circle component of this object
                    bulletGameObject.addComponent(new BulletEnemeyCollisionComponent())
                    GameObject.instantiate(bulletGameObject, this.transform.x, this.transform.y + 30)
                    //GameObject.instantiate(new BulletGameObject("BulletGameObject", 3), this.transform.x, this.transform.y + 30)
                } else {
                    let bulletGameObject = new GameObject("BulletGameObject")
                    bulletGameObject.addComponent(new Circle("blue", "blue", 2, 1))//Create the circle component of this object
                    bulletGameObject.addComponent(new BulletMovementComponent(4))//Create the circle component of this object
                    bulletGameObject.addComponent(new BulletEnemeyCollisionComponent())
                    GameObject.instantiate(bulletGameObject, this.transform.x - 30, this.transform.y)
                    //GameObject.instantiate(new BulletGameObject("BulletGameObject", 4), this.transform.x - 30, this.transform.y)
                }
                this.time = 0
            }
        }
        this.time += Time.ms
    }
}

window.CreateBulletComponent = CreateBulletComponent
export default CreateBulletComponent