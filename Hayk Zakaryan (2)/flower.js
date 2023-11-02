class Flower {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 9999
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }



    chooseCell(char) {
        this.getNewCoordinates()
        let found = []


        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
            }
        }


        return found

    }

    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

             for(let i in this.directions){

                let x = this.directions[i][0]
                let y = this.directions[i][1]
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    matrix[y][x] = 11
                    let flow = new Flower(newX, newY)
                    matrix[this.y][this.x] = 4
                    flowerArr.push(flow)
                }

            }
            
         


            
        }
    }



    eat(){
        let emptyCell = this.chooseCell()
        let newCell = random(emptyCell)

           if(newCell ){
               this.energy+=12
            let newX = newCell[0]
            let newY = newCell[1]
                   for(let i in predatorArr){
                            if(newX == predatorArr[i].x  && newY == predatorArr[i].y){
                                      predatorArr.splice(i,1)
                            }
                   }

                   matrix[newY][newX] = 4
                 
                   

                   matrix[this.y][this.x] = 0


                   this.x = newX
                   this.y = newY
                   console.log(this.energy);
                   if(this.energy > 25){
                        this.mul()
                   }

           }else {
             this.energy--
           }

           if(this.energy < 0){
            this.die ()
           }
     }


     die(){
        matrix[this.y][this.x] = 0

          for(let i in rabbitArr){
                   if(this.x == rabbitArr[i].x && this.y == rabbitArr[i].y) {
                             rabbitArr.splice(i,1)
                   }
    }
    
   
}

}