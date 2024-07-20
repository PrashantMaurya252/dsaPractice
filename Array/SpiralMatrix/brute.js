function SpiralMatrix(arr){
    let top =0
    let bottom = arr.length-1
    let left =0
    let right = arr[0].length-1

    while( top <= bottom && left <= right ){
        for(let i = left;i<=right;i++){
            console.log(arr[top][i])
        }
        top++
    
        for( let i = top;i<=bottom;i++){
            console.log(arr[i][right])
        }
        right--

        if(top <= bottom){
            for(let i = right;i>=left;i--){
                console.log(arr[bottom][i])
            }
            bottom--
        }
        if(left <= right){
            for(let i = bottom;i>=top;i--){
                console.log(arr[i][left])
            }
            left++
        }
        
        
    }

    
}

// console.log(SpiralMatrix([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]))

SpiralMatrix([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ])