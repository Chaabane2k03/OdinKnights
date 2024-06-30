import { reconstitutePath, solve , displayPath} from "./path.js";


function knightMoves(start , end){
    var path = solve(start,end);
    path = reconstitutePath(path)
    displayPath(path)
}


const start = [0,0];
const end = [3,3];
knightMoves(start , end)