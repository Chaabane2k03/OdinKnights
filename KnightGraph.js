export function createKnightGraph(){
    const graph = []

    // knight possible movements
    const knightMoves = [
        [2, 1], [2, -1], [1, 2], [1, -2],
        [-2, 1], [-2, -1], [-1, 2], [-1, -2]
    ];

    for(let row = 0; row<8;row++){
        for(let col=0; col<8;col++){
            graph[[row,col]] = []

            for(const [moveRow, moveCol] of knightMoves){
                const newRow = row+moveRow
                const newCol = col + moveCol


                if (0 <= newRow && newRow < 8 && newCol < 8 && newCol>=0){
                    graph[[row,col]].push([newRow, newCol])
                }
            }


        }

    }

    return graph
}