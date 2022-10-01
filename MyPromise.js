export default class MyPromise {
    constructor(executor) {
        this.state = "PENDING";

        const resolve = (value) => {
            this.state = "FULFILLED";
            this.result = value;
            return this;
        };

        const reject = (reason) => {
            this.state = "REJECTED";
            this.result = reason;
            return this;
        };

        executor(resolve, reject);
    }

    then(onFulfilled, onRejected) {
        if(this.state === "FULFILLED")
            onFulfilled(this.result);
        else if(this.state === "REJECTED")
            onRejected(this.result);

        return this;
    }
}