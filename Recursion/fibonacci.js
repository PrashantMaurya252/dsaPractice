function recursivefibo(n){
    if(n<2){
        return n
    }
    return recursivefibo(n-1) +recursivefibo(n-2)
}

console.log(recursivefibo(6))