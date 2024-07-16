function majorityElements(arr){
    let n=arr.length
    const hash ={}
    let threshold=Math.floor(n/2)

    for(let i=0;i<arr.length;i++){
          if(hash[arr[i]] != undefined){
            hash[arr[i]]++
          }else{
            hash[arr[i]] =1
          }

          if(hash[arr[i]] > threshold){
            return arr[i]
          }
    }
    return -1
}

console.log(majorityElements([1,1,36,3,3,3,3,4]))