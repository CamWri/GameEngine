class AcidGunnerGameObject extends GameObject{
    constructor(name, tag){
        super(name, tag)
    }

    start(){
        this.addComponent(new Circle("limegreen", "purple", 25, 5))//Create the circle component of this object
        this.addComponent(new EnemeyHealthComponent(4, 400))
        this.addComponent(new AcidGunnerMovementComponent())
        this.addComponent(new CreateAcidShotComponent())
    }
}

window.AcidGunnerGameObject = AcidGunnerGameObject
export default AcidGunnerGameObject