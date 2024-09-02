// depth first search

const hasPath = (graph,src,dst) =>{
    if(src === dst) return true
    for(let neighbor of graph[src]){
        console.log(neighbor,"neighbor")
        console.log(src,"src")
        console.log(dst,"dst")
        if(hasPath(graph,neighbor,dst) === true){
            console.log(neighbor,"neighbor1")
            console.log(src,"src1")
            console.log(dst,"dst1")
            return true
        }
    }

    return false
}

const graph1 = {
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

// console.log(hasPath(graph,'b','f'))

// breadth first search

const hasPath2 = (graph,src,dst)=>{
    const queue = [src]
    while(queue.length > 0){
        const current = queue.shift()
        if(current === dst) return true

        for(let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }
    return false
}

console.log(hasPath2(graph1,'c','f'))