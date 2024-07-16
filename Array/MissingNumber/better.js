function missingNumber(arr){
    const hash = new Array(arr.length +1).fill(0)
    console.log(hash)
    for(let i=0;i<arr.length;i++){
        console.log(i,"i")
        console.log(arr[i],"arr[i]")
        console.log(hash[arr[i]],"hash[arr[i]]")
        hash[arr[i]]=1
    }
    for(let i=1;i<=arr.length;i++){
        if(hash[i]===0){
            return i
        }
    }
}


console.log(missingNumber([2,3,4,5]))