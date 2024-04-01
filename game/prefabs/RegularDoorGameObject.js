class RegularDoorGameObejct extends GameObject{
    constructor(name, xCord, yCord, xPosition, yPosition){
        super(name)
        this.xCord = xCord
        this.yCord = yCord
        this.xPosition = xPosition
        this.yPosition = yPosition
    }

    start(){
        this.addComponent(new Rectangle("darkgoldenrod", "black", 80, 30))
        this.addComponent(new EnterNextRoom(this.xCord, this.yCord, this.xPosition, this.yPosition))
    }
}

window.RegularDoorGameObejct = RegularDoorGameObejct
export default RegularDoorGameObejct