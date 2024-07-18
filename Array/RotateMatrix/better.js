function rotateMatrix(arr){
    let n= arr[0].length
    for(let i = 0;i < n-1;i++){
        for(let j= i+1 ; j < n;j++){
            let temp = arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = temp
        }
    }
    for(let i =0 ;i<n ; i++){
        console.log(arr[i],'arr[i]')
        arr[i].reverse()
    }
    return arr
}

console.log(rotateMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]))