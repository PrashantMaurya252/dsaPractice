function twoSum(arr,t){
    let left =0;
    let right = arr.length
    while(left<right){
        if(arr[left]+arr[right]===t){
            return true
        }
        else if(arr[left]+arr[right] <t){
            left++
        }
        else {
            right --
        }
    }
    return false
}

console.log(twoSum([1,2,6,8],11))
