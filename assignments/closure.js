// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function count() {
    var counter = 0;

    function increment() {
        return ++counter;
    }
    return increment();
}

console.log(count());
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let count = 0;

const counter = () => {
    // Return a function that when invoked increments and returns a counter variable.

    function increaseCount() {
        return ++count;
    }
    return increaseCount();
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
counter();

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = arg => {
    let counter = 0;
    const incDec = () => {
        if (arg == "inc") {
            return ++counter;
        } else if (arg == "dec") {
            return --counter;
        } else {
            return "Not a valid argument"
        }
    }
    return incDec;
};

const myCounter = counterFactory('inc');
console.log(myCounter());
