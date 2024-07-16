function notAppearingTwice(arr){
    let max =0
    for(let i=0;i<arr.length;i++){
        max =Math.max(max,arr[i])
        console.log(max)

       
    }

    const hash=new Array(max+1).fill(0)
    console.log(hash)
    for(let i=0;i<arr.length;i++){
        console.log(hash[arr[i]]++,"hash[arr[i]]++")
        hash[arr[i]]+
        console.log(hash,"hash")
    }
    console.log(hash)

    for(let i=0;i<arr.length;i++){
        if(hash[arr[i]] == 1)
            return arr[i]
    }
}

console.log(notAppearingTwice([1,2,2,3,3,4,4]))