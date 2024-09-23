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

    Delete(value){
        if(!this.head ){
            return null
        }
        if(this.head.data === value){
            this.head = this.head.next
            return
        }

        let current = this.head
        let previous = null
        console.log(this.head,"Head")

        while(current !== null && current.data !== value){
            previous = current
            current = current.next
        }

        if(current === null){
            console.log(`value ${value} does not find in linkedlist`)
            return
        }
        console.log(previous,"previous",current,"current")

        previous.next = current.next
    }

    Find(value){
        if(!this.head){
            return null
        }
        let current = this.head

        while(current !== null && current.data !== value){
            current = current.next
        }

        if(current === null){
            console.log(`value ${value} not found in linkedlist`)
            return
        }

        console.log('value found')
        return 
    }

    Reverse(){
        console.log("reverse-----------------------------------")
        let prev = null
        let current = this.head
        let next = null

        while(current !== null){
            console.log(next,"next",current.next)
            next = current.next
            console.log(current.next,"current.next",prev,"prev")
            current.next = prev
            console.log(prev,"prev",current,"current")
            prev = current
            console.log(current,"current",next,"next")
            current = next


        }
        this.head = prev
    }

    middle(){

        if(this.head === null) return null

        let slow = this.head
        let fast = this.head

        let current = this.head
        while(fast !== null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }
        console.log(slow.data ,"middle")
        return slow.data
    }

    
}

const ll =new LinkedList()
ll.AddFirst(100)
ll.AddLast(200)
ll.AddLast(300)
ll.AddLast(400)
ll.AddLast(500)
ll.AddLast(600)
ll.Find(100)
ll.middle()
// ll.Reverse()

console.log(ll,"ll")
 