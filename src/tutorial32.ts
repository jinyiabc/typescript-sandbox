let myMap = new Map();

myMap.set("fname", "alex");
myMap.set("age", 37);

console.log(myMap.get("fname"));

let ob1 = {};
let ob2 = {};

myMap.set(ob1, 10);
myMap.set(ob2, 10);
myMap.delete("fname")
myMap.clear()

console.log(myMap.get(ob1));
console.log(myMap.size);
console.log(myMap.has("fname"));