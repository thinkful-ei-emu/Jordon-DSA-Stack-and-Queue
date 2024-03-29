class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    dequeue() {
        //if the queue is empty, there is nothing to return
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        //if this is the last item in the queue
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
    //O(1)

    peek(q) {
        if (q.first === null) {
            return null;
        } else {
            return q.first.value;
        }
    }
}

function isEmpty(q) {
    return !q.first;
}

function display(queue) {
    while (queue.first !== null) {
        console.log(queue.first.value);
        queue.first = queue.first.next;
    }
}

function main() {
    const starTrek = new Queue();

    starTrek.enqueue('Kirk');
    starTrek.enqueue('Spock');
    starTrek.enqueue('Sulu');
    starTrek.enqueue('Checkov');

    starTrek.dequeue();
    starTrek.dequeue();

    display(starTrek);

}

main();

module.exports = Queue;