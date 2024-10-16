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
        //base case start and finish
        //console.log(start, end)

        //converting the start and end into node objects here
        start = new Node(start[0], start[1])
        //console.log(start)
        end = new Node(end[0], end[1])
        //console.log(end)


        //console.log(end.points)

        
        //base case if board is in the boundaries of 7 by 7 board
        if(start == undefined || end == undefined) {return null}
        //I need to add in if x or y + next move is greater is 7 === out of bounds
        //Add in negative numbers
        if (this.x > 7 || this.y > 7 || this.x < 0 || this.y < 7){
            return "Out of Bounds"
         }


        this.queue = []
        this.queue.push(start)
        //console.log(this.queue)
        
        while(this.queue.length){
            //length of the queue
            let levelSize = this.queue.length
            //track where I been
            let currentlevel = []

            //make sure here i push the moves loop each go
            for (let i = 0; i < levelSize; i++){
                let currNode = this.queue.shift()
                currentlevel.push(currNode.points)

                this.queue.forEach(function(item){
                    if(JSON.stringify(item.points) === JSON.stringify(end.points)){
                        return "finished"
                    }
                })

                //push all these nodes in the queue
                //gets the next possible moves
                this.possibleMoves(currNode.x, currNode.y)
                
                console.log(this.queue)
                if(currNode){
                    this.queue.push(currNode)
                }

                console.log(this.queue.length) // 9 length

                console.log(currentlevel) //equals 3,3 first level the root
                results.push(currentlevel)
            }
            
            
        }


        //create a array to track moves and make sure no repeat moves
        //create a QUEUE to track each current move and check if any moves are the ONE

        //recursion would be the legal moves allowed

        //Before or After the recursion i need to track amount moves made

        return results
    }


    //possible moves is a function
    //the directions allowed is th left and right that are tracked in queue each while loop

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



    moves.forEach(function(item){
        console.log(item)
        queue.push(item)
    })
        
    
    }


}

let move1 = new KnightsMove()

console.log(move1.spf([3,3],[5,4]))