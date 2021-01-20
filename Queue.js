class Queue  {
    constructor(){
        this.store = {}
        this.head = 0;
        this.tail = 0;
    }
    enqueue(el){
        this.store[this.tail] = el
        this.tail++
    }
    dequeue(){
        
        var removed = this.store[this.head];
        delete this.store[this.head]
        this.head++
        return removed
    }

}
module.export = Queue