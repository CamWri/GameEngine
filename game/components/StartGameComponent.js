class StartGameComponent extends Component{
    constructor(){
        super()
    }

    update(ctx){
        if (Input.keysDown.includes("Space")){
            Engine.currentScene = new RoomScene()
            console.log(Globals.floorLayoutObect)

        }
    }
}

window.StartGameComponent = StartGameComponent
export default StartGameComponent