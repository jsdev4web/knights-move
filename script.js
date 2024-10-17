class Node {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.points = [this.x, this.y]
    }
}

class KnightsMove{
    constructor(){
        this.queue = []
    }

    spf(start, end){
        
        let results = []
        start = new Node(start[0], start[1])
        end = new Node(end[0], end[1])
        
        //base case if board is in the boundaries of 7 by 7 board
        if(start == undefined || end == undefined) {return null}

        this.queue = []
        this.queue.push(start)
        
        while(this.queue.length){
            //length of the queue
            let levelSize = this.queue.length
            //track where I been
            let currentlevel = []

            //make sure here i push the moves loop each go
            for (let i = 0; i < levelSize; i++){
                let currNode = this.queue.shift()

                //console.log(currNode.x, currNode.y)
                //console.log(end.x, end.y)

                //Claused that node is found
                if(currNode.x === end.x && currNode.y === end.y){
                    return "found"
                }
                
                 //write a if statement to stop DUPLICATE nodes
                 console.log(JSON.stringify(currNode.points))
                 for (let x = 0; x < currentlevel.length; x++){
                    
                    if(JSON.stringify(currNode.x) === JSON.stringify(currentlevel[x][0]) && JSON.stringify(currNode.y) === JSON.stringify(currentlevel[x][1])){
                       //duplicate breaks the while loop atm
                       console.log("duplicate") 
                       //currNode = null
                    }
                 }

                 //push all these nodes in the queue
                //gets the next possible moves
                this.possibleMoves(currNode.x, currNode.y)


                currentlevel.push(currNode.points)
                
                console.log(currentlevel)

                
                //console.log(this.queue)
                //if(currNode){
                 //   this.queue.push(currNode)
               // }

                //console.log(this.queue.length) // 9 length

                //console.log(currentlevel) //equals 3,3 first level the root
                results.push(currentlevel)
            }
            
            //return results
        }

        return results
    }

    //all the moves added to current level
    possibleMoves(x, y){
        let queue = this.queue
        let moves =  
            [
            new Node(x + 1, y + 2),
            new Node(x + 1, y - 2),
            new Node(x - 1, y + 2),
            new Node(x - 1, y - 2),
            new Node(x + 2, y + 1),
            new Node(x + 2, y - 1),
            new Node(x - 2, y + 1),
            new Node(x - 2, y - 1)
            ]



    for (let i = 0; i < moves.length; i++){
        if (moves[i].x < 0 || moves[i].x > 7 || moves[i].y < 0 || moves[i].y > 7){
            moves.splice(i, 1)
        } else{
        //console.log([moves[i].x, moves[i].y])
        queue.push(moves[i])
        }
    }


    }


}

let move1 = new KnightsMove()

console.log(move1.spf([3,3],[5,7]))