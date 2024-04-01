class CreateAcidShotComponent extends Component{
    constructor(){
        super()
        this.shotTimer = 4001
        this.characterObject = Engine.currentScene.gameObjects.find(go=>go.name == "CharacterGameObject")

    }

    update(){
        if(this.shotTimer > 4000 ){
            if(Math.abs(this.characterObject.transform.y - this.transform.y) < 30){
                let acidShotGameObjectHorz = new GameObject("AcidShot", "EnemeyGameObject")
                acidShotGameObjectHorz.addComponent(new Circle("limegreen", "lawngreen", 10, 1))
                if(this.characterObject.transform.x - this.transform.x > 0){
                    acidShotGameObjectHorz.addComponent(new AcidShotMovementComponent(2))
                    GameObject.instantiate(acidShotGameObjectHorz, this.transform.x + 30, this.transform.y)
                }
                if(this.characterObject.transform.x - this.transform.x < 0){
                    acidShotGameObjectHorz.addComponent(new AcidShotMovementComponent(4))
                    GameObject.instantiate(acidShotGameObjectHorz, this.transform.x - 30, this.transform.y)
                }
                this.shotTimer = 0
            }
           
            if(Math.abs(this.characterObject.transform.x - this.transform.x) < 30){
                let acidShotGameObjectVert = new GameObject("AcidShot", "EnemeyGameObject")
                acidShotGameObjectVert.addComponent(new Circle("limegreen", "lawngreen", 10, 1))
                if(this.characterObject.transform.y - this.transform.y > 0){
                    acidShotGameObjectVert.addComponent(new AcidShotMovementComponent(3))
                    GameObject.instantiate(acidShotGameObjectVert, this.transform.x, this.transform.y + 30)
                }
                if(this.characterObject.transform.x - this.transform.x < 0){
                    acidShotGameObjectVert.addComponent(new AcidShotMovementComponent(1))
                    GameObject.instantiate(acidShotGameObjectVert, this.transform.x, this.transform.y - 30)
                }
                this.shotTimer = 0
            }

        }
        this.shotTimer += Time.ms
    }
}

window.CreateAcidShotComponent = CreateAcidShotComponent
export default CreateAcidShotComponent