export class Connect4 {
  
  private grid: number[][];
  private currentPlayer: number;
  private gameOver: boolean;

  constructor() {
    this.grid = Array.from({ length: 6 }, () => Array(7).fill(0));
    this.currentPlayer = 1;
    this.gameOver = false;
  }

  play(col: number): string {
    if (this.gameOver) {
      return "Game has finished!";
    }

    if (this.isColumnFull(col)) {
      return "Column full!";
    }

    const row = this.getNextAvailableRow(col);
    this.grid[row][col] = this.currentPlayer;

    if (this.checkForWin(row, col)) {
      this.gameOver = true;
      return `Player ${this.currentPlayer} wins!`;
    }
    let movPlayer = this.currentPlayer
    this.switchPlayer();
    return `Player ${movPlayer} has a turn`;
  }

  private isColumnFull(col: number): boolean {
    return this.grid[0][col] !== 0;
  }

  private getNextAvailableRow(col: number): number {
    for (let row = 5; row >= 0; row--) {
      if (this.grid[row][col] === 0) {
        return row;
      }
    }
    return -1; // Column is full, should not happen if checked with isColumnFull
  }

  private switchPlayer(): void {
    this.currentPlayer = 3 - this.currentPlayer; // Switch between 1 and 2
  }

  private checkForWin(row: number, col: number): boolean {
    return (
      this.check(col, row, 1, 0) || 
      this.check(col, row, 0, 1) ||
      this.check(col, row, 1, 1) ||
      this.check(col, row, -1, -1)
    );
  }
  
  private check(col: number, row: number, rowIncrement: number, colIncrement: number) : boolean {

      const player = this.grid[row][col];
      if ((row + 3 >= this.grid.length) && colIncrement === 0) {
        return false
      }

      if(col + 3 >= this.grid[0].length && colIncrement > 0){
        colIncrement = -1
      }

      for (let i = 0; i < 4; i++) {
        const row1 = row + (i * rowIncrement);
        const col1 = col + (i * colIncrement);
        if (row1 < 0 || row1 >= 6 || col1 < 0 || col1 >= 7 || this.grid[row1][col1] !== player) {
          return false;
        }
    }
    return true;
  }
}
