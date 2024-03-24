class BulletGameObject extends GameObject{
    constructor(name, direction){
        super(name)
        this.direction = direction
    }

    start(ctx){
        this.addComponent(new Circle("blue", "blue", 2, 1))//Create the circle component of this object
        this.addComponent(new BulletMovementComponent(this.direction))//Create the circle component of this object
        this.addComponent(new BulletEnemeyCollisionComponent())
    }
}

window.BulletGameObject = BulletGameObject
export default BulletGameObject