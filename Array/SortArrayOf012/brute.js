function sortArray(arr){
    const sort =[]
    let count0=0;
    let count1=0;
    let count2=0;
    for(let i =0;i<arr.length;i++){
        if(arr[i] === 0) count0++
        if(arr[i] === 1) count1++
        if(arr[i] === 2) count2++
    }

    for(let i=0;i<count0;i++){
        sort[i]=0
    }
    for(let i=count0;i<(count1+count0);i++){
        sort[i]=1
    }
    for(let i=(count1+count0);i<arr.length;i++){
        sort[i]=2
    }
    return sort
}

console.log(sortArray([0,1,0,0,2,2,1]))