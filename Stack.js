class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

}

function peek(stack) {
    return stack.top;
}

function isEmpty(stack) {
    return !stack.top;
}

function display(stack) {
    while (stack.top !== null) {
        console.log(stack.top.data);
        stack.top = stack.top.next;
    }
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    const stringStack = new Stack();
    for (let i = 0; i < s.length; i++) {
        stringStack.push(s[i]);
    }

    const reverseStack = new Stack();
    for (let i = s.length - 1; i >= 0; i--) {
        reverseStack.push(s[i]);
    }

    while (stringStack.top !== null) {
        if (stringStack.top.data !== reverseStack.top.data) {
            return false;
        }
        stringStack.top = stringStack.top.next;
        reverseStack.top = reverseStack.top.next;
    }
    return true;
}

function matching(string) {
    let stack = new Stack();
    // string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    console.log(string.length);


    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(') {
            stack.push(string[i])
        }

        if (string[i] === ')') {
            if (isEmpty(stack)) {
                console.log('Close parenthesis without an open parenthesis at: ' + i)
                return false;
            }
            stack.pop()
        }
    }

    if (isEmpty(stack)) {
        return true;
    }
    console.log('missing a )')
    return false;

}

function sort(stack) {
    let secondStack = new Stack();
    let temp;

    while (stack.top) {
        temp = stack.pop();
        while (secondStack.top && temp > secondStack.top.data) {
            stack.push(secondStack.pop());
        }
        secondStack.push(temp);
    }
    return secondStack;
}

function main() {

    const starTrek = new Stack();

    starTrek.push('kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    starTrek.pop('McCoy');

    const numberStack = new Stack();
    numberStack.push(1);
    numberStack.push(6);
    numberStack.push(3);
    numberStack.push(7);
    numberStack.push(5);
    numberStack.push(2);
    numberStack.push(4);

    console.log(display(sort(numberStack)));


    display(starTrek);
    console.log(is_palindrome("dad"));
    console.log(is_palindrome("A man, a plan, a canal: Panama"));
    console.log(is_palindrome("1001"));
    console.log(is_palindrome("Tauhida"));
    console.log(matching("()()())"));


}

main();