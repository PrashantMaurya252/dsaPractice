function rotateMatrix(arr){
    let n = arr[0].length
    console.log(n,"n")
    const ans=Array.from({length:n},()=>Array(n).fill(0))
    console.log(ans,"ans")

    for(let i=0;i<n;i++){
        for(let j = 0 ;j<n;j++){
            ans[j][n-1-i] = arr[i][j]
        }
    }
    return ans
}

console.log(rotateMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9],
]))