class VeggieSmoothieItemGameObject extends GameObject{
    constructor(name, tag){
        super(name, tag)
    }

    start(){
        this.addComponent(new Circle("gold", "black", 15, 3))//Create the circle component of this object
        this.addComponent(new CharacterItemCollisionComponent())
    }
}

window.VeggieSmoothieItemGameObject = VeggieSmoothieItemGameObject
export default VeggieSmoothieItemGameObject