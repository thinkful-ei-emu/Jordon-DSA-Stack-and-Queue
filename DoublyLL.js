class _Node {
    constructor(data, next) {
        this.next = next;
        this.data = data;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            node.next = this.last;
            this.last.prev = node;
        }

        this.last = node;
    }

    peek() {
        return this.first.value;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }

        const node = this.first;
        this.first = node.prev;

        if (node === this.last) {
            this.last = null;
        }

        return node.value;
    }
}

function displayQ(q) {
    let currentNode = q.first;
    while (currentNode !== null) {
        console.log(currentNode.value);
        currentNode = currentNode.prev;
    }
}

function ophidian(q) {

    while (q.first) {
        let currentCustomer = q.first.value;
        if (currentCustomer) {
            console.log('We served a prepared customer');
            q.dequeue();
        } else {
            console.log('No paperwork, back to end of queue');
            currentCustomer = true;
            q.enqueue(currentCustomer);
            q.dequeue();
        }
    }
}

function squareDance(q) {
    let spares = new Queue();
    let spareCount = 0;
    while (q.first) {
        if (!spares.first) {
            spares.enqueue(q.dequeue());
            spareCount++;
        }
        if (q.first.value.gender !== spares.first.value.gender) {
            console.log(
                `${q.first.value.gender} dancer is ${q.first.value.name}, and the ${
                spares.first.value.gender
                } dancer is ${spares.first.value.name}`
            );
            q.dequeue();
            spares.dequeue();
            spareCount--;
        } else if (q.first.value.gender === spares.first.value.gender) {
            spares.enqueue(q.dequeue());
            spareCount++;
        }
    }
    console.log(
        'There are ' +
        spareCount +
        ' ' +
        spares.first.value.gender +
        ' dancers waiting'
    );
}

function stacksToQ(stackOne, stackTwo) {
    //input: 1,2,3,4
    while (stackOne.top) {
        stackTwo.push(stackOne.pop());
    }
    while (stackTwo.top) {
        console.log(stackTwo.pop());
    }
}



// then remove the nodes from a stack to build a new string
// if string2 = input

function main() {
    let dancers = new Queue();
    dancers.enqueue({ gender: 'F', name: 'Jane' });
    dancers.enqueue({ gender: 'M', name: 'frank' });
    dancers.enqueue({ gender: 'M', name: 'John' });
    dancers.enqueue({ gender: 'M', name: 'joe' });
    dancers.enqueue({ gender: 'F', name: 'Madonna' });
    dancers.enqueue({ gender: 'M', name: 'dave' });
    dancers.enqueue({ gender: 'M', name: 'Chris' });
    dancers.enqueue({ gender: 'F', name: 'Beyonce' });
    squareDance(dancers);
    let random;
    let bankQ = new Queue();
    let customers = 10;
    while (customers > 0) {
        random = Math.random() >= 0.25;
        bankQ.enqueue(random);
        customers--;
    }
    ophidian(bankQ);
}



main();
