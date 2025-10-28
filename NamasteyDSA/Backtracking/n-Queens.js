function nQueens(n){
    let result = [];
    let board = Array.from({length : n}, () => Array(n).fill("."));
    let transform = (board) => {
        let newBoard = [];
        for(let i = 0; i < board.length; i++){
            newBoard.push(board[i].join(""));
        }
        return newBoard;
    }
    let backtrack = (board, row, colSet, diagonalSet, antiDiagonalSet) => {
        if(row === n){
            result.push(transform(board));
        }

        for(let col = 0; col < n; col++){
            if(colSet.has(col) || diagonalSet.has(row - col) || antiDiagonalSet.has(row + col)) continue;

            board[row][col] = "Q";
            colSet.add(col);
            diagonalSet.add(row - col);
            antiDiagonalSet.add(row + col);

            backtrack(board, row + 1, colSet, diagonalSet, antiDiagonalSet);
            board[row][col] = ".";
            colSet.delete(col);
            diagonalSet.delete(row - col);
            antiDiagonalSet.delete(row + col);
        }
    }
    backtrack(board, 0, new Set(), new Set(), new Set());
    return result;
}

// console.log(nQueens(4));
console.log(nQueens(8));