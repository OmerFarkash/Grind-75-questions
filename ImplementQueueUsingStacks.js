// idea: when you look at a queue it's a stack and the same stack in reverse order
// and that's what is did - push the one itno the other when need


var MyQueue = function() {
    this.in = []
    this.out = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if (this.in.length === 0) {
        for (let i = this.out.length - 1; i >= 0; i--) {
            this.in.push(this.out[i])
        }
        this.out = []
    }
    this.in.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.empty())
        retutn -1
    if (this.out.length === 0) {
        for (let i = this.in.length - 1; i >= 0; i--) {
            this.out.push(this.in[i])
        }
        this.in = []
    }   
    return this.out.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.empty())
        retutn -1
    if (this.out.length === 0) {
        for (let i = this.in.length - 1; i >= 0; i--) {
            this.out.push(this.in[i])
        }
        this.in = []
    }  
    return this.out[this.out.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.in.length === 0 && this.out.length === 0)
        return true
    return false
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */