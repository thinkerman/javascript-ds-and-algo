class ListNode {
    constructor(val, next){
        this.val = val || null;
        this.next = next || null
    }
}
class List{
    constructor(val){
        this.head = new ListNode(val)
    }
    append(val){
        var head = this.head
        if (!head) {
            this.head = new ListNode(val);
        } else {
            while (head.next) {
                head = head.next
            }
            head.next = new ListNode(val);
        }
    }
    reverse(){
        var prev = null;
        let head = this.head;
        // 1->2->3->4->5
        // prev = null
        // next = 2
        // prev = 1
        // head = 2

        while (head) {
            var next = head.next; //hold reference to the next items in the list
            head.next = prev; // sever the body from the head 
            prev = head; //set the new breakpoint
            head = next //set head to be the severed body
            
        }
        this.head = prev;
        // console.log(prev)
      
    }

}
console.clear()

// Irene Chen



let ll = new List(5)
ll.append(7)
ll.append(6)
// ll.reverse()
ll.reverse2()
// console.log(ll)