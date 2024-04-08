class Circle extends Component{
    constructor(fill, stroke, radius, outlineWitdth){
        super()
        this.fill = fill
        this.stroke = stroke
        this.radius = radius
        this.outlineWitdth = outlineWitdth
        this.originalfill = fill
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.fill
        ctx.strokeStyle = this.stroke
        ctx.lineWidth = this.outlineWitdth
        ctx.arc(this.transform.x, this.transform.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
    }

    asGeometry(){
        return new Circle2(this.transform.x, this.transform.y, this.transform.scaleX)
    }
}

window.Circle = Circle
export default Circle