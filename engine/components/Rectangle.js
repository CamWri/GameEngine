class Rectangle extends Component{
    constructor(fill = "yellow", stroke = "black", width, height){
        super()
        this.fill = fill
        this.stroke = stroke
        this.width = width
        this.height = height
        this.originalfill = fill
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

    asGeometry(){
        return new Rectangle2(this.transform.x, this.transform.y, this.transform.scaleX, this.transform.scaleY);
    }
}

window.Rectangle = Rectangle
export default Rectangle