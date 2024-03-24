class ItemRoomDoorGameObject extends GameObject{
    constructor(name, xCord, yCord, xPosition, yPosition){
        super(name)
        this.xCord = xCord
        this.yCord = yCord
        this.xPosition = xPosition
        this.yPosition = yPosition
    }

    start(){
        doorGameObject1.addComponent(new Rectangle("lightbluesky", "black", 80, 30))
        this.addComponent(new EnterNextRoom(this.xCord, this.yCord, this.xPosition, this.yPosition))
    }
}

window.ItemRoomDoorGameObject = ItemRoomDoorGameObject
export default ItemRoomDoorGameObject