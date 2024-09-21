class Node{
    constructor(data){
        this.data = data
        this.next =null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0
    }

    AddFirst(value){
        const newNode = new Node(value)
        console.log(newNode,"new Node")
        newNode.next = this.head
        console.log(this.head,"this.head1")
        console.log(newNode.next,"newNode.next")
    
        this.head = newNode
        console.log(this.head,"this.head")
        this.length++
        console.log(this.length,"length")
    }

    AddLast(value){
        console.log("Add Last")
        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode
        }else{
            let current = this.head
            console.log(current,"current",this.head,"this.head")

            while(current.next){
                console.log(current.next,"current Next")
                current = current.next
            }
            current.next = newNode

            console.log(this.head,"head3")
            
        }
        this.length++
        
    }
}

const ll =new LinkedList()
ll.AddFirst(100)
ll.AddLast(200)
ll.AddLast(300)

console.log(ll,"ll")
 