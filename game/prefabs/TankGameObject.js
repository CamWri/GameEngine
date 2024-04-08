class TankGameObject extends GameObject{
    constructor(name, tag){
        super(name, tag)
    }

    start(){
        this.addComponent(new Circle("coral", "purple", 30, 5))//Create the circle component of this object
        this.addComponent(new TankMovementComponent())
        this.addComponent(new EnemeyHealthComponent(6, 750))
    }
}

window.TankGameObject = TankGameObject
export default TankGameObject