// https://leetcode.com/problems/flood-fill/

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    let startingPixelColor: number = image[sr][sc];
    // Do nothing when the starting pixel has the same color with the new color
    if (startingPixelColor == color) {
        return image;
    }
    
    // Put the starting pixel into the array of pixels to be processed
    let toBeProcessedPixels: [number, number][] = [[sr, sc]];
    let rowIndex: number;
    let columnIndex: number;
    // Sequentially process pixels in the array of pixels to be processed
    while (toBeProcessedPixels.length > 0) {
        rowIndex = toBeProcessedPixels[0][0];
        columnIndex = toBeProcessedPixels[0][1];
        /* Check the connected 4-directionally pixels and add them to the array to be processed, if valid */
        // Top pixel
        if (typeof image[rowIndex-1] !== 'undefined' && typeof image[rowIndex-1][columnIndex] !== 'undefined' && image[rowIndex-1][columnIndex] == startingPixelColor && !toBeProcessedPixels.some(function(el){ return el[0] === rowIndex-1 && el[1] === columnIndex})) {
            toBeProcessedPixels.push([rowIndex-1, columnIndex]);
        }
        // Left pixel
        if (typeof image[rowIndex] !== 'undefined' && typeof image[rowIndex][columnIndex-1] !== 'undefined' && image[rowIndex][columnIndex-1] == startingPixelColor && !toBeProcessedPixels.some(function(el){ return el[0] === rowIndex && el[1] === columnIndex-1})) {
            toBeProcessedPixels.push([rowIndex, columnIndex-1]);
        }
        // Bottom pixel
        if (typeof image[rowIndex+1] !== 'undefined' && typeof image[rowIndex+1][columnIndex] !== 'undefined' && image[rowIndex+1][columnIndex] == startingPixelColor && !toBeProcessedPixels.some(function(el){ return el[0] === rowIndex+1 && el[1] === columnIndex})) {
            toBeProcessedPixels.push([rowIndex+1, columnIndex]);
        }
        // Right pixel
        if (typeof image[rowIndex] !== 'undefined' && typeof image[rowIndex][columnIndex+1] !== 'undefined' && image[rowIndex][columnIndex+1] == startingPixelColor && !toBeProcessedPixels.some(function(el){ return el[0] === rowIndex && el[1] === columnIndex+1})) {
            toBeProcessedPixels.push([rowIndex, columnIndex+1]);
        }

        // Color the current processing pixel
        image[toBeProcessedPixels[0][0]][toBeProcessedPixels[0][1]] = color;

        // Remove the first element because it has just been processed
        toBeProcessedPixels.shift();
    }

    return image;
};