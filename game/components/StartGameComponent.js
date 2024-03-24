class StartGameComponent extends Component{
    constructor(){
        super()
    }

    update(ctx){
        if (Input.keysDown.includes("Space")){
            Engine.currentScene = new RoomScene()
        }
    }
}

window.StartGameComponent = StartGameComponent
export default StartGameComponent