class AcidPoolDuractionComponent extends Component{
    constructor(){
        super()
        this.duration = 0.0
    }

    update(){

        if(this.duration > 2500){
            GameObject.destroy(this.parent)
        }

        this.duration += Time.ms
    }
}

window.AcidPoolDuractionComponent = AcidPoolDuractionComponent
export default AcidPoolDuractionComponent