// Task 1 //

let x = 10;
if (x > 5)  {
    console.log("Help")
};

let expenses = 10000;
if (expenses > 7000) {
    console.log("High expenses")
} else {
    console.log("Manageable Expenses")
};

// Task 2 //
let score = 60;
if (score > 60) {
    console.log("Passing")
} else {
    console.log("Fail")
};

// Task 3 //
for (let i = 10; i >= 1; i--) {
    console.log(i);
};

//Task 4 //
let num = 2;
while (num <= 10) {
    console.log(num);
    num += 2;
}

// Task 5 //
function calculateSquare(num) {
    return num * num;
}
console.log(calculateSquare(4)); // Outputs: 16