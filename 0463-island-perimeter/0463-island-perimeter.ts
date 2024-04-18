function islandPerimeter(grid: number[][]): number {
    const width = grid[0].length;
    const height = grid.length;

    let perimeter = 0;

    for(let i = 0; i < height; i += 1) {
        for(let j = 0; j < width; j += 1) {
            if(i === 0 && grid[i][j] === 1) { 
                perimeter += 1
            }

            if(j === 0 && grid[i][j] === 1) { 
                perimeter += 1
            }

            if(grid[i][j] === 1) {
                if(j === width - 1) {
                    perimeter += 1
                } 

                if(j !== width - 1 && grid[i][j + 1] === 0) {
                    perimeter += 1
                }

                if(i === height - 1) {
                    perimeter += 1
                } 

                if(i !== height - 1 && grid[i + 1][j] === 0) {
                    perimeter += 1
                }
            } else {
                if(j !== width - 1 && grid[i][j + 1] === 1) {
                    perimeter += 1
                }

                if(i !== height - 1 && grid[i + 1][j] === 1) {
                    perimeter += 1
                }
            }
        }   
    }

    return perimeter;
};