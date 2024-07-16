function linearSearch(arr,n){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===n) return true
    }
    return false
}


function longestSequence(arr){
    let max =1

    for(let i=0;i<arr.length;i++){
        let x =arr[i]
          let count=1
          while (linearSearch(arr,x+1) === true){
            console.log(arr[i],x+1,"x")
            console.log(max,x+1,count,"count")
            x +=1
            count +=1
            
            
          }
          max = Math.max(count,max)

          
    }
    return max
   
}

console.log(longestSequence([100,200,1,2,3,4,10,11,12,13,14,15,16]))

// console.log(linearSearch([1,4,7,3,9,2],9))