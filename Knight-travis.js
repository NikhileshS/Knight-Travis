// Function responsible for validating whether the move is legal or not in the chessboard
function node(pos, path){
    if(pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7){
        return null;
    }
    return { pos, path };
}
function knight([x,y],[a,b]){
    let temp = [node([x,y],[[x,y]])];
    // shifting values from temp to current node in order to initialize the current-node with
    // starting position
    let currentnode = temp.shift();
    // looping until the current position is our desired end position
    while(currentnode.pos[0] !== a || currentnode.pos[1] !== b){
        // calculating all possible moves made by the knight
        let moves = [
            [currentnode.pos[0]+2, currentnode.pos[1]+1],
            [currentnode.pos[0]+2, currentnode.pos[1]-1],
            [currentnode.pos[0]-2, currentnode.pos[1]+1],
            [currentnode.pos[0]-2, currentnode.pos[1]-1],
            [currentnode.pos[0]+1, currentnode.pos[1]+2],
            [currentnode.pos[0]+1, currentnode.pos[1]-2],
            [currentnode.pos[0]-1, currentnode.pos[1]+2],
            [currentnode.pos[0]-1, currentnode.pos[1]-2],
        ]
        // Looping though each possible moves to push it to the temp variable
        // if the move is a legal chess move
        moves.forEach((moves)=>{
            let point = node(moves, currentnode.path.concat([moves]));
            if(point){
                temp.push(point);
            }
        }
    )
        // setting the current node to the next value 
        currentnode = temp.shift();    
    }
    console.log(`you have made it in ${currentnode.path.length - 1} moves, Here is your path`)
    currentnode.path.forEach((pos)=>{
        console.log(pos);
    });
}

knight([0,0], [7,7]);