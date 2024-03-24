class DasherLeftGameObject extends DasherGameObject{
    constructor(name, tag){
        super(name, tag);
    }



    start(){
        super.start()
        this.addComponent(new DasherLeftMovementComponent())
    }
}

window.DasherLeftGameObject = DasherLeftGameObject
export default DasherLeftGameObject