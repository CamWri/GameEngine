class AcidShotGameObject extends GameObject{
    constructor(name, tag){
        super(name, tag)
    }

    start(){
        this.addComponent(new Circle("limegreen", "lawngreen", 5, 1))//Create the circle component of this object
    }
}

window.AcidShotGameObject = AcidShotGameObject
export default AcidShotGameObject