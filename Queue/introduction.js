class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            return "Underflow, cannot perform dequeue"
        }
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0;
    }

    front(){
        if(this.isEmpty()){
            return "No Element in the Queue"
        }
        return this.items[0]
    }

    size(){
        return this.items.length
    }

    printQueue(){
        let queueString = ""
        for (let i = 0;i<this.size();i++){
            queueString += this.items[i] + ", " 
        }
        console.log("Queue: " + queueString)
    }
}

const myQueue = new Queue();
 myQueue.enqueue(5);
 myQueue.enqueue(96);
 myQueue.enqueue(778);

 console.log(myQueue.printQueue())