class TurretGameObject extends GameObject{
    constructor(name, tag){
        super(name, tag)
    }

    start(){
        this.addComponent(new Circle("cadetblue", "purple", 15, 3))//Create the circle component of this object
        this.addComponent(new EnemeyHealthComponent(3, 1000))
        this.addComponent(new CreateEnemeyBulleteComponent())

    }
}

window.TurretGameObject = TurretGameObject
export default TurretGameObject