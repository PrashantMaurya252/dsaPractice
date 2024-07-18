console.log([1,2,3,1,4,5,5,6,9,10,8,11,100].sort((a,b)=>a-b))

function largestConsecutive(arr){
    const sortedArray = arr.sort((a,b)=>a-b)
    let count =0
    let leastSmallest = -1
    let longest = 1

    for(let i = 0;i<sortedArray.length;i++){
        if(sortedArray[i]-1 == leastSmallest){
            count +=1;
            leastSmallest = sortedArray[i]
        }else if(sortedArray[i] !== leastSmallest){
            count =1
            leastSmallest = sortedArray[i]
        }
        longest = Math.max(longest,count)
        
    }
    return longest
}

console.log(largestConsecutive([1,2,4,5,6,9,10,11,12,13,14]))