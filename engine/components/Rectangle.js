class Rectangle extends Component{
    constructor(fill = "yellow", stroke = "black", width, height){
        super()
        this.fill = fill
        this.stroke = stroke
        this.width = width
        this.height = height
    }

    start(){
        this.originalfill = this.fill
    }

    draw(ctx){
        ctx.fillStyle = this.fill
        ctx.strokeStyle = this.stroke
        ctx.beginPath()
        ctx.rect(
            this.parent.transform.x, 
            this.parent.transform.y,
            this.width,
            this.height
        )
        ctx.fill()
        ctx.stroke()
    }
}

window.Rectangle = Rectangle
export default Rectangle