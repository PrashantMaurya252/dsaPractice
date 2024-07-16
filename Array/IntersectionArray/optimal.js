function intersection(arr1,arr2){
    let ans =[]
    let i=0;
    let j=0;
    while(i < arr1.length){
        if(arr1[i]===arr2[j]){
            ans.push(arr1[i])
            i++
            j++
        }else if(arr1[i] <arr2[j]){
            i++
        }else{
            j++
        }
        
    }
    return ans
}

console.log(intersection([1,2,3,4,5],[2,3,5]))