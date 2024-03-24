class Scene {
    gameObjects = []
    hasStarted = false

    constructor(backgroundColor) {
        this.backgroundColor = backgroundColor
        this.hasStarted = false
    }

    _start(ctx){
        if(!this.hasStarted){
            this.hasStarted = true;
            this.start(ctx)
            for(const gameObject of this.gameObjects){
                if(gameObject.start){
                    gameObject.start(ctx)
                }
            }
        }
    }


    update(ctx) {
        for(const gameObject of this.gameObjects){
            if(gameObject.update){
                gameObject.update();
            }
        }
    }

    draw(ctx) {
        //Clear the canvas
        ctx.fillStyle = this.backgroundColor
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)


        for (const gameObject of this.gameObjects) {
            if(gameObject.draw){
                gameObject.draw(ctx);
            }
        }

    }
}

window.Scene = Scene
export default Scene