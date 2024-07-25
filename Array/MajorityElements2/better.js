function majorityElements2(nums){
     const map = new Map()
     const ans = []
     for(let i = 0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }else{
            map.set(nums[i],1)
        }
     }
     map.forEach((value,key)=>{
        if(value > Math.floor(nums.length/3)){
            ans.push(key)
        }
     })
     return ans
}

console.log(majorityElements2([2,2]))

// const map = new Map()
// const set = new Set()
// const arr = [1,1,2,2,3,4,5,5]
// for(let i =0;i<arr.length;i++){
//     set.add(arr[i])
//     if(map.has(arr[i])){
//         map.set(arr[i],map.get(arr[i])+1)
//     }else{
//         map.set(arr[i],1)
//     }
// }
// const ans = []
// console.log(map)
// console.log(set)
// map.forEach((value,key)=>{
//     console.log(key,"key")
//     console.log(value,"value")
//     if(value >= 2){
//         ans.push(key)
//     }
// })
// console.log(ans,"ans")
// console.log(map.get(1))