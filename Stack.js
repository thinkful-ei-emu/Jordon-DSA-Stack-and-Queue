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

function is_matching(s) {
    let stack = new Stack();

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        } else if (s[i] === ')') {
            const top = peek(stack);
            if (!top) {
                return false;
            } stack.pop();
        }
    }
}

function main() {

    const starTrek = new Stack();

    starTrek.push('kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    starTrek.pop('McCoy');

    display(starTrek);
    console.log(is_palindrome("dad"));
    console.log(is_palindrome("A man, a plan, a canal: Panama"));
    console.log(is_palindrome("1001"));
    console.log(is_palindrome("Tauhida"));


}

main();