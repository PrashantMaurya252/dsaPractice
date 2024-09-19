function binarySearch(nums,target){
    let low = 0;
    let high = nums.length-1
    let mid
    while(high >= low){
        mid = low + Math.floor((high - low)/2)

        if(nums[mid] === target) return mid

        if(target > nums[mid]){
            low = mid+1
        }else{
            high = mid-1
        }
    }
    return -1

}

console.log(binarySearch([1,2,3,4,5,6,7,8,9],8))