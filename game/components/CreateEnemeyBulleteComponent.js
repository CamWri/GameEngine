class CreateEnemeyBulleteComponent extends Component{
    constructor(){
        super()
        this.shotTimer = 0;
    }

    update(){
        if (this.shotTimer > 3000){
            let enemuBulletGameObject = new GameObject("EnemyBulletGameObject", "EnemeyGameObject")
            enemuBulletGameObject.addComponent(new Circle("lightsteelblue", "navy", 5, 1)) 
            enemuBulletGameObject.addComponent(new EnemyBulletMovementComponent())
            GameObject.instantiate(enemuBulletGameObject, this.transform.x, this.transform.y)
            this.shotTimer = 0
        }
        this.shotTimer += Time.ms
    }
}

window.CreateEnemeyBulleteComponent = CreateEnemeyBulleteComponent
export default CreateEnemeyBulleteComponent