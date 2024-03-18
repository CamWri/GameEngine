class CreateFloorComponent extends Component{
    constructor(){
        super()
        this.currentXCord = 0
        this.currentYCord = 0
        this.startingRoomX
        this.startingRoomY
        this.endingRoomX
        this.endingRoomY
        this.itemRoomX
        this.itemRoomY 
        this.floorLayout = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    }

    start(ctx){
        while(true){
            this.startingRoomGeneration()
            this.endingRoomGeneration()
            this.itemRoomGeneration()
            while (Math.abs(this.startingRoomX - this.endingRoomX) < 3 || Math.abs(this.startingRoomY - this.endingRoomY) < 3){
                this.floorLayout[this.startingRoomY][this.startingRoomX] = 0
                this.floorLayout[this.endingRoomY][this.endingRoomX] = 0
                this.floorLayout[this.itemRoomY][this.itemRoomX] = 0
                this.startingRoomGeneration()
                this.endingRoomGeneration()
                this.itemRoomGeneration()
            }
    
            let visited
    
            while (!this.checkIfRoomsConnect(true)){
                    this.createRandRoom();
            }
            


            this.minimizeRoomNumber(true)
        
            let itemRoomConnectors = 0
            let startingRoomConnecetors = 0
            let endingRoomConnectors = 0
            let standardRoomNumber = 0
    
            for(let i = 1; i < this.floorLayout.length - 1; i++){
                for(let j = 1; j< this.floorLayout[i].length - 1; j++){
                    if (this.floorLayout[i][j] == 4){
                        itemRoomConnectors = this.floorLayout[i+1][j] == 1 ? ++itemRoomConnectors : itemRoomConnectors
                        itemRoomConnectors = this.floorLayout[i-1][j] == 1 ? ++itemRoomConnectors  : itemRoomConnectors
                        itemRoomConnectors = this.floorLayout[i][j + 1] == 1 ? ++itemRoomConnectors  : itemRoomConnectors
                        itemRoomConnectors = this.floorLayout[i][j - 1] == 1 ? ++itemRoomConnectors  : itemRoomConnectors
                    }
                    if (this.floorLayout[i][j] == 2){
                        endingRoomConnectors = this.floorLayout[i+1][j] == 1 ? ++endingRoomConnectors : endingRoomConnectors
                        endingRoomConnectors = this.floorLayout[i-1][j] == 1 ? ++endingRoomConnectors  : endingRoomConnectors
                        endingRoomConnectors = this.floorLayout[i][j + 1] == 1 ? ++endingRoomConnectors  : endingRoomConnectors
                        endingRoomConnectors = this.floorLayout[i][j - 1] == 1 ? ++endingRoomConnectors  : endingRoomConnectors
                    }
                    if (this.floorLayout[i][j] == 3){
                        startingRoomConnecetors = this.floorLayout[i+1][j] == 1 ? ++startingRoomConnecetors : startingRoomConnecetors
                        startingRoomConnecetors = this.floorLayout[i-1][j] == 1 ? ++startingRoomConnecetors  : startingRoomConnecetors
                        startingRoomConnecetors = this.floorLayout[i][j + 1] == 1 ? ++startingRoomConnecetors  : startingRoomConnecetors
                        startingRoomConnecetors = this.floorLayout[i][j - 1] == 1 ? ++startingRoomConnecetors  : startingRoomConnecetors
                    }
                    if (this.floorLayout[i][j] == 1){
                        standardRoomNumber++
                    }
                }
            }
            if (itemRoomConnectors == 1 && endingRoomConnectors == 1 && startingRoomConnecetors == 1 && standardRoomNumber > 5 && standardRoomNumber < 15){
                break
            }
            this.floorLayout[this.startingRoomY][this.startingRoomX] = 0
            this.floorLayout[this.endingRoomY][this.endingRoomX] = 0
            this.floorLayout[this.itemRoomY][this.itemRoomX] = 0
        }
        //console.log(this.floorLayout)
        //console.log(this.startingRoomX)
        //console.log(this.startingRoomY)
    }


    updateXCord(xCord){
        this.currentXCord = xCord
    }

    updateYCord(yCord){
        this.currentYCord = yCord
    }
    
    startingRoomGeneration(){
        this.startingRoomX = Math.floor(Math.random()* 8) + 1
        this.startingRoomY = Math.floor(Math.random()* 8) + 1
        this.currentXCord = this.startingRoomX
        this.currentYCord = this.startingRoomY
        if (this.floorLayout[this.startingRoomY][this.startingRoomX] == 0 ){
            this.floorLayout[this.startingRoomY][this.startingRoomX] = 3
        } else{
            this.startingRoomGeneration()
        }
    }

    endingRoomGeneration(){
        this.endingRoomX = Math.floor(Math.random()* 8) + 1
        this.endingRoomY = Math.floor(Math.random()* 8) + 1
        if (this.floorLayout[this.endingRoomY][this.endingRoomX] == 0){
            this.floorLayout[this.endingRoomY][this.endingRoomX] = 2
        } else{
            this.endingRoomGeneration()
        }
    }

    itemRoomGeneration(){
        let restrictedXValues = [this.endingRoomX - 1, this.endingRoomX, this.endingRoomX + 1, this.startingRoomX -1, this.startingRoomX, this.startingRoomX + 1]
        let restrictedYValues = [this.endingRoomY - 1, this.endingRoomY, this.endingRoomY + 1, this.startingRoomY -1, this.startingRoomY, this.startingRoomY + 1 ]
    
        this.itemRoomX = Math.floor(Math.random()* 8) + 1
        this.itemRoomY = Math.floor(Math.random()* 8) + 1
        if (this.floorLayout[this.itemRoomY][this.itemRoomX] == 0 && !restrictedXValues.includes(this.itemRoomX) && !restrictedYValues.includes(this.itemRoomY)){
            this.floorLayout[this.itemRoomY][this.itemRoomX] = 4
        } else {
            this.itemRoomGeneration()
        }
    }

    createRandRoom(){
        let roomX = Math.floor(Math.random()* 8) + 1
        let roomY = Math.floor(Math.random()* 8) + 1
        if (this.floorLayout[roomX][roomY] == 0){
            this.floorLayout[roomX][roomY] = 1
        }
    }

    checkIfRoomsConnect(startToEndConnection) {
        let visited = new Set();
        let stack = [[this.startingRoomX, this.startingRoomY]];
    
        while (stack.length > 0) {
            let [xCord, yCord] = stack.pop();
    
            if (xCord < 0 || xCord >= this.floorLayout[0].length || yCord < 0 || yCord >= this.floorLayout.length || visited.has(`${xCord}-${yCord}`)) {
                continue;
            }
    
            visited.add(`${xCord}-${yCord}`);
            if(startToEndConnection){
                if (visited.has(`${this.endingRoomX}-${this.endingRoomY}`) && visited.has(`${this.itemRoomX}-${this.itemRoomY}`)) {
                    return true;
                } 
            } 
            if(!startToEndConnection){
                if (visited.has(`${this.endingRoomX}-${this.endingRoomY}`)){
                    return true;
                } 
            }
    
            if (this.floorLayout[yCord][xCord] != 0) {
                stack.push([xCord, yCord + 1]); // Down
                stack.push([xCord, yCord - 1]); // Up
                stack.push([xCord + 1, yCord]); // Right
                stack.push([xCord - 1, yCord]); // Left
            }
        }
    
        return false; // No valid path found
    }

    minimizeRoomNumber(startToEndConnection){
        let need = [] 
        for(let i = 0; i < this.floorLayout.length; i++){
            for(let j = 0; j< this.floorLayout[i].length; j++){
                if (this.floorLayout[i][j] == 1){
                    this.floorLayout[i][j] = 0
                    if (!this.checkIfRoomsConnect(startToEndConnection)){
                        this.floorLayout[i][j] = 1
                        need.push([i, j])
                    }
                }
            }
        }
    }
}

window.CreateFloorComponent = CreateFloorComponent
export default CreateFloorComponent