const connectedComponentCount = (graph) => {
    const visited = new Set()
    let count = 0
    for(let node in graph){
        if(explore(graph,node,visited) === true){
            console.log(visited)
            count +=1
        }
    }
    return count
}
const graph1 ={
    0:[8,1,5],
    1:[0],
    5:[0,8],
    8:[0,5],
    2:[3,4],
    3:[2,4],
    4:[3,2]
}
const explore = (graph,current,visited) =>{
    if(visited.has(String(current))) return false;

    visited.add(String(current))

    for(let neighbor of graph[current]){
        explore(graph,neighbor,visited)
    }
    return true
}

console.log(connectedComponentCount(graph1))