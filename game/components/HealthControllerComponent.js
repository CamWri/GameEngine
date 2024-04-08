class HealthControllerComponent extends Component{
    constructor(){
        super()
    }

    update(){
        this.maxHealth = Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").maxHealth
        this.currentHealth = Globals.characterStats.components.find(go=>go.constructor.name == "CharacterStatsComponent").currentHealth

        let currentXCord = 50 + this.maxHealth * 60
        for(let i = this.currentHealth; i < this.maxHealth; i++){
            let emptyhealthComponent = new GameObject("EmptyHealth" + i, "LifeGameObject")
            emptyhealthComponent.transform.x = currentXCord
            emptyhealthComponent.transform.y = 50
            emptyhealthComponent.addComponent(new Circle("white", "white", 20, 1))//Create the circle component of this object
            currentXCord -= 60
            Engine.currentScene.gameObjects.push(emptyhealthComponent)
        }

        for(let i = 1; i <= this.currentHealth; i++){
            let healthComponent = new GameObject("Health" + i, "LifeGameObject")
            healthComponent.transform.x = currentXCord
            healthComponent.transform.y = 50
            healthComponent.addComponent(new Circle("red", "white", 20, 1))//Create the circle component of this object
            currentXCord -= 60
            Engine.currentScene.gameObjects.push(healthComponent)
        }

    }
}

window.HealthControllerComponent = HealthControllerComponent
export default HealthControllerComponent