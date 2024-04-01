class CharacterStatsComponent extends Component{
    constructor(){
        super()
        this.maxHealth = 3
        this.currentHealth = 3
        this.damage = 1
        this.range = 2000
        this.rateOfFire = 500
        this.bulletSpeed = 300
        this.speed = 200
        this.startingXCord = window.innerWidth/2
        this.startingYCord = window.innerHeight/2
    }
}

window.CharacterStatsComponent = CharacterStatsComponent
export default CharacterStatsComponent