class ListNode{
    constructor(data){
        this.data = data
        this.next = null 
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    // printList(){
    //     let current = this.head
    //     console.log(current,"current")
    //     while(current !== null){
    //         console.log(current.data, '=>')
    //         current = current.next
    //     }
    // }

    addFirst(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    addLast(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = new Node
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
let node3 = new ListNode(7)
let node4 = new ListNode(9)

console.log(node1.next = node2,"node1.next = node2")
node1.next = node2
node2.next = node3
node3.next = node4

let list = new LinkedList(node1)
console.log(list,"list")
