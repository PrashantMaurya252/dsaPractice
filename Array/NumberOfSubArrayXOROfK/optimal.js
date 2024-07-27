function numberOfSubArray(nums,target){
    let xr =0
    const map = new Map()
    map.set(xr,1)
    let count = 0
    for(let i = 0;i<nums.length;i++){
        xr = xr^nums[i]
        let x = xr^target
        if(map.has(x)){
            count += map.get(x)
        }

        if(map.has(xr)){
            map.set(xr,map.get(xr)+1)
        }else{
            map.set(xr,1)
        }
    }
    return count
}

console.log(numberOfSubArray([4,2,2,6,4],6))