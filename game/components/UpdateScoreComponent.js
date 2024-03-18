class UpdateScoreComponent extends Component{
    constructor(){
        super()
    }

    update(){
        Globals.score += 1
    }
}

window.UpdateScoreComponent = UpdateScoreComponent
export default UpdateScoreComponent