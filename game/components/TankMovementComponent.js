class TankMovementComponent extends Component{
    constructor(){
        super()
        this.characterObject = Engine.currentScene.gameObjects.find(go=>go.name == "CharacterGameObject")
        this.attackCooldown = 0
        this.attackDuration = 0
        this.idleDura
        this.attackAnimation = false
        this.speed = 75
        this.counter = 0
    }

    update(){
        let attackCompontnet = new GameObject("TankAttack", "EnemyAttackObject")

        let firstRingAttack = new Circle("saddlebrown", "sienna", 15, 0)
        let secondRingAttack = new Circle("sienna", "sandybrown", 15, 0)
        let thirdRingAttack = new Circle("sandybrown", "sandybrown", 15, 0)

        if(Collisions.isCircleCircleCollision({x:this.transform.x, y:this.transform.y}, {x:this.characterObject.transform.x, y:this.characterObject.transform.y}, 100, 25)){
            this.speed = 0
            this.attackAnimation = true
        }

        if(this.attackAnimation == true){
            this.attackDuration += Time.ms
            if(this.attackDuration > 2000){
                this.attackAnimation = false
                this.attackDuration = 0
                this.speed = 75
            }
        }

        if(this.characterObject.transform.y < this.transform.y){
            this.transform.y -=  this.speed * Time.deltaTime
        }
        if (this.characterObject.transform.y > this.transform.y){
            this.transform.y +=  this.speed * Time.deltaTime
        }
        if(this.characterObject.transform.x < this.transform.x){
            this.transform.x -=  this.speed * Time.deltaTime
        }
        if (this.characterObject.transform.x > this.transform.x){
            this.transform.x +=  this.speed * Time.deltaTime
        }

        Engine.currentScene.gameObjects.push(attackCompontnet)

    }
}

window.TankMovementComponent = TankMovementComponent
export default TankMovementComponent