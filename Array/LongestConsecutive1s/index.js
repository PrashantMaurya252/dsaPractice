function longest(arr){
    let max =0;
    let count = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){
            count++
            max=Math.max(max,count)
        }else{
            count =0

        }
    }
    return max
}
console.log(longest([1,1,0,1,1,1,0,1]))