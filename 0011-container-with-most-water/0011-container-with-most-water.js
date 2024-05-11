/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    
    let maxJ =0;
    let maxI =0;
    let area = 0;
    for (let i = 0; i < height.length ; i++) {
        if(maxI < height[i] ){
        for (let j = height.length - 1; j > i; j--) {
            if( maxJ < height[j]){
            let area1 =  Math.min(height[i], height[j]) * (j - i);
            area =  Math.max(area, area1)
            maxJ = height[j]
            }
        }
        maxJ=0
        maxI = height[i]
        }
    }
    return area;
};