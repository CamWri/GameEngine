class CreateRoomComponent extends Component{
    constructor(){
        super()
    }
    
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = "lightgray"
        ctx.strokeStyle = "gray"
        ctx.lineWidth = 5
        ctx.rect(150, 100, ctx.canvas.width - 300, ctx.canvas.height - 200)
        ctx.fill()
        ctx.stroke() 
    }    
}

window.CreateRoomComponent = CreateRoomComponent
export default CreateRoomComponent