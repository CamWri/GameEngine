class ChargerGameObject extends GameObject{
    constructor(name, tag){
        super(name, tag)
    }

    start(){
        this.addComponent(new Circle("mediumorchid", "purple", 20, 5))//Create the circle component of this object
        this.addComponent(new EnemeyHealthComponent(5, 250))
        this.addComponent(new ChargerMovementComponent())
    }
}

window.ChargerGameObject = ChargerGameObject
export default ChargerGameObject