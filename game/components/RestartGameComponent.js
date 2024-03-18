class RestartGameComponent extends Component{
    constructor(){
        super()
        this.time = 0
    }

    update(){
        if(this.time > 2000){
            Engine.currentScene = new StartScene()
        } else{
            this.time += Time.ms
        }
    }
}

window.RestartGameComponent = RestartGameComponent
export default RestartGameComponent