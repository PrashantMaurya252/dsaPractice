class Node {
    constructor(val){
        this.val = val;
        this.left = null
        this.right = null
    }
}

const treeMinValue = (root) =>{
    let smallest = Infinity
    const stack = [root]
    while(stack.length > 0){
        const current = stack.pop();
        if(current.val < smallest) smallest = current.val

        if(current.left != null) stack.push(current.left)
        if(current.right != null) stack.push(current.right)    
    }

    return smallest
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

console.log(treeMinValue(a))