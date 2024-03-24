class LifeGameObject extends GameObject{
    constructor(name, tag){
        super(name, tag)
    }

    start(){
        this.addComponent(new Circle("red", "white", 20, 1))//Create the circle component of this object
    }
}

window.LifeGameObject = LifeGameObject
export default LifeGameObject