import { createKnightGraph } from "./KnightGraph.js";

// Implementing BFS algorithm 
let knightGraph = createKnightGraph();

export function solve(start,end){
    const queue = [[start , [start]]]
    const visited = new Set()

    while(queue.length > 0){
        const [currentSquare , currentPath] = queue.shift()

        if (visited.has(currentSquare.toString())){
            continue;
        }

        visited.add(currentSquare.toString());

        if(currentSquare[0] === end[0] && currentSquare[1] === end[1]){
            return currentPath
        }

        for(const neighbor of knightGraph[currentSquare]){
            queue.push([neighbor,[...currentPath,neighbor]])
        }
    }

    return null
}

export function reconstitutePath(path){
    if (!path){
        return null
    }

    const newPath = [];
    for (let i=0; i<path.length;i++){
        newPath.push(path[i])
    }

    return newPath
}


export function displayPath(path){
    if (!path) {
        console.log("No path found!");
        return;
    }
    
    const numMoves = path.length - 1;
    console.log(`=> You made it in ${numMoves} moves! Here's your path:`);
    for (const square of path) {
        console.log(`  [${square}]`);
    }
}