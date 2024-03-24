class ChaserGameObject extends GameObject{
    constructor(name, tag){
        super(name, tag)
    }


    start(){
        this.addComponent(new Circle("blue", "purple", 20, 5))//Create the circle component of this object
        this.addComponent(new ChaserMovementComponent())//Create the circle component of this object
        this.addComponent(new EnemeyHealthComponent(4, 250))
    }
}

window.ChaserGameObject = ChaserGameObject
export default ChaserGameObject