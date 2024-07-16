function buySell(arr){
    let mini = arr[0]
    let profit = 0;
    for(let i=1;i<arr.length;i++){
        let cost = arr[i]-mini
        profit=Math.max(profit,cost)
        mini=Math.min(mini,arr[i])
    }
    return profit
}

console.log(buySell([7,1,4,8,2]))