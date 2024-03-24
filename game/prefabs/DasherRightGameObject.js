class DasherRightGameObject extends DasherGameObject{
    constructor(name, tag){
        super(name, tag);
    }



    start(){
        super.start()
        this.addComponent(new DasherRightMovementComponent())
    }
}

window.DasherRightGameObject = DasherRightGameObject
export default DasherRightGameObject