class DasherGameObject extends GameObject{
    constructor(name, tag, base){
        super(name, tag);
        this.base = base
    }



    start(){
        this.addComponent(new Circle("yellow", "purple", 15, 0))//Create the circle component of this object
        this.addComponent(new EnemeyHealthComponent(2, 500))
        this.addComponent(new DasherMovementComponent(this.base))
    }
}

window.DasherGameObject = DasherGameObject
export default DasherGameObject