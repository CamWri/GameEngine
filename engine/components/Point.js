class Point extends Component{
    constructor(fill = "blue"){
        super()
        this.fill = fill
    }
    
    start(){
        this.originalfill = this.fill
    }
    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle = this.fill
        ctx.arc(this.transform.x, this.transform.y, 10, 0, Math.PI * 2)
    }
}

window.Point = Point
export default Point