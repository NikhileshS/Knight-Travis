function node(pos, path){
    if(pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7){
        return null;
    }
    return { pos, path };
}

function knight([x,y],[a,b]){
    let temp = [node([x,y],[[x,y]])];
    let currentnode = temp.shift();

    while(currentnode.pos[0] !== a || currentnode.pos[1] !== b){
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
        moves.forEach((moves)=>{
            let point = node(moves, currentnode.path.concat([moves]));
            if(point){
                temp.push(point);
            }
        }
    )
        currentnode = temp.shift();    
    }
    console.log(`you have made it in ${currentnode.path.length - 1} moves, Here is your path`)
    currentnode.path.forEach((pos)=>{
        console.log(pos);
    });
}

knight([3, 3], [4, 3]);