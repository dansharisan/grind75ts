// https://leetcode.com/problems/implement-queue-using-stacks/

class Stack<T> {
    private items: Array<T>

    constructor()
    {
        this.items = [];
    }

    push(element: T)
    {
        this.items.push(element);
    }

    pop()
    {
        return this.items.pop() as T;
    }

    peek()
    {
        return this.items[this.items.length - 1];
    }

    empty()
    {
        return this.items.length == 0;
    }
}

class MyQueue {
    private main: Stack<number>;
    private sub: Stack<number>;

    constructor() {
        this.main = new Stack();
        this.sub = new Stack();
    }

    push(x: number): void {
        this.main.push(x)
    }

    pop(): number {
        // Move all elements from main to sub stack in reverse order (because of LIFO)
        while (!this.main.empty()) {
            this.sub.push(this.main.peek())
            this.main.pop()
        }
        // Now this is the front
        let front: number = this.sub.pop()
        
        // Move all elements from sub to main stack again
        while (!this.sub.empty()) {
            this.main.push(this.sub.peek())
            this.sub.pop()
        }

        return front
    }

    peek(): number {
        // Move all elements from main to sub stack in reverse order (because of LIFO)
        while (!this.main.empty()) {
            this.sub.push(this.main.peek())
            this.main.pop()
        }

        // Now this is the front
        let front: number = this.sub.peek()

        // Move all elements from sub to main stack again
        while (!this.sub.empty()) {
            this.main.push(this.sub.peek())
            this.sub.pop()
        }

        return front
    }

    empty(): boolean {
        return this.main.empty()
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */