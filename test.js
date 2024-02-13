// Testfiles

const X = parseInt(12334);
let R = X.toString()
console.log(R.slice(-2))

const fruits = [];
fruits.push("banana", "apple", "peach");
fruits[5] = "mango";
console.log(Object.keys(fruits));
console.log(fruits.length)

fruits.length = 10;
console.log(fruits);
console.log(Object.keys(fruits));
console.log(fruits.length)
console.log(fruits[8])

for (let i = 0 ; i <= 10 ; i++) {
    console.log("***")
}
