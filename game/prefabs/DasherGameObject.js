class DasherGameObject extends GameObject{
    constructor(name, tag){
        super(name, tag);
    }



    start(){
        this.addComponent(new Circle("yellow", "purple", 15, 0))//Create the circle component of this object
        this.addComponent(new EnemeyHealthComponent(2, 500))
    }
}

window.DasherGameObject = DasherGameObject
export default DasherGameObject