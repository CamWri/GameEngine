class CharacterGameObject extends GameObject{
    constructor(name){
        super(name)
    }

    start(){
        this.addComponent(new Circle("green", "black", 20, 5))//Create the circle component of this object
        this.addComponent(new CharacterMovementComponent())//This is the movement
        this.addComponent(new CharacterEnemeyCollisionComponent())
        this.addComponent(new CreateBulletComponent())
    }
}

window.CharacterGameObject = CharacterGameObject
export default CharacterGameObject