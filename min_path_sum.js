// Minimum Path Sum

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

class Grid {
    constructor(...args) {
        if (args.length === 2) {
            const [n, m] = args;
            this.grid = [];
            
            for (let i = 0; i < n; i++) {
                this.grid[i] = new Array(m).fill();
            }
            
        } else {
            this.grid = args[0];
        }
        
    }
    
    set(n, m, value) {
        this.grid[n][m] = value;
    }
    
    get(n, m) {
        return this.grid[n][m];
    }
    
    size() {
        return [this.grid.length, this.grid[0].length]
    }
    
    print() {
        for (let row of this.grid) {
            console.log(row);
            
        }
        console.log('----')
    }
}

function minPathSum(grid) {
    const input = new Grid(grid);
    const [n, m] = input.size();
    
    const dist = new Grid(n, m);
    
    dist.set(n - 1, m - 1, input.get(n - 1, m - 1));
    
    for (let i = n - 2; i>=0; i--) {
        dist.set(i, m - 1, dist.get(i +1, m - 1) + input.get(i, m - 1))
    }
    
    for (let k = m - 2; k>=0; k--) {
        dist.set(n - 1, k, dist.get(n - 1, k + 1) + input.get(n - 1, k))
    }
    
    for (let i = n - 2; i>=0; i--) {
        for (let k = m - 2; k>=0; k--) {
            
            dist.set(i, k, input.get(i, k) + Math.min(
                dist.get(i + 1, k),
                dist.get(i, k + 1) 
            ))
        }
    }
    
    return dist.get(0,0)
};
