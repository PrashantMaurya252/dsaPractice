class Node {
    constructor(val){
        this.val = val;
        this.left = null
        this.right = null
    }
}


const maxPathSum = (root) =>{
    if(root === null) return -Infinity
    if(root.left === null && root.right === null) return root.val
    const maxChildPathSum = Math.max(maxPathSum(root.left),maxPathSum(root.right))
    return root.val + maxChildPathSum
}

const a = new Node(4)
const b = new Node(6)
const c = new Node(7)
const d = new Node(5)
const e = new Node(3)
const f = new Node(2)


a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(maxPathSum(a))