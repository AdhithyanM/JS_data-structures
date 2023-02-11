const print = (msg) => console.log(msg);

const arr = [1, 2, 3, 'vicky'];

// print(arr[0]);

// to add an element at end of array
arr.push(5);
// to add an element at begining of array
arr.unshift(0);
// to remove an element at end of array
arr.pop();
// to remove an element at begining of array
arr.shift();

// delete arr[ind] - modifies that position to undefined.
print("---- delete"); 
var ar = [1, 2, 3, 4, 5, 6];
print(ar);
delete ar[3];
print(ar);


print("---- print using for loop")
for(const item of arr) {
    print(arr[0]);
}



let names = ['Danny', 'Joe', 'Sarah', 'Molly'];
let names2 = ['john', 'Tom'];



// toString
print("---- toString()");
let stringNames = names.toString();
print(stringNames);



// join
print("--- join()");
let stringNames2 = names.join(" and ");
print(stringNames2);



// concat 
print("---- concat()");
let joined = names.concat(names2);
console.log(joined);



// splice - remove elements from an array and also can add new elements to array
print("---- splice()");
let namesCopy = [...names];
namesCopy.splice(1, 1);  // start index, how many elements to be deleted from that index
print(namesCopy);   // removes joe
namesCopy.splice(1, 1, ...names2);
print(namesCopy);  // removes the range and inserts the items (names2) at start position.



// slice - to take out a slice (a part) of an array
print("---- slice()");
let namesCopy2 = [...names];
let slice = names.slice(1, 3);  // slices the items from 1st index to 2nd index
print(namesCopy2);
print(slice);



// indexOf & lastIndexOf - to find a particular value's index
print("---- indexOf()");
let index = names.indexOf("Joe");
print(`Joe index in names is ${index}`);
let lastIndex = names.lastIndexOf("Molly");
print(`Molly last index in names is ${lastIndex}`);



// flat - flats the array to 1D even if it has arrays inside arrays as its elements
print("---- flat()");
let nums = [1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]], 11];
let flatLevel1 = nums.flat();
let flatLevel2 = nums.flat(2);
let flatLevel3 = nums.flat(3);
print(flatLevel1);
print(flatLevel2);
print(flatLevel3);



/*
higher order array method
- It is a function that accepts functions as args and/or returns a function
- can say functions that operate on other functions.
eg: forEach
*/

// forEach
print("----- forEach()");
names.forEach((n) => {
    print(n);
});
print("-- custom control for loop")
// for custom control use normal for loop
for (let i = 2; i < names.length; i = i+2) {
    print(names[i]);
}



// map - if you want to return new array from first array after doing some functionality on each elements
print("---- map");
let nums2 = [1, 2, 3, 4, 5, 6];
let doubled = nums2.map((n) => n*2);
console.log(doubled);



// filter - to get the filtered array from the first array based on some filter condition performing on each elements.
print("---- filter()");
let posts = [
    { title: 'post1', author: 'ben' },
    { title: 'post2', author: 'ben' },
    { title: 'post3', author: 'zayde' },
];
let benPosts = posts.filter(p => p.author === 'ben');
print(benPosts);



// reduce - to reduce an array down to a single value.
print("---- reduce()");
let total = nums2.reduce(
    (accumulator, value) => accumulator + value,    // it provides us an accumulator which gets carried throughout the traversal
    0                                               // starting value of our accumulator (total in this case)
);
print(total);
// one common use case for reduce is to find max value in an array.
let max = nums2.reduce((a, b) => Math.max(a, b), -Infinity);
print(`${nums2}: max value: ${max}`);



// some - to check if some array values pass a certain test
print("---- some()");
let isSomeGreaterThan5 = nums2.some((n) => n > 5);      // immediately returns even if one value is true
print(isSomeGreaterThan5);



// every - to check if every single value in our array passes a certain test
print("---- every()");
let allGreaterThan0 = nums2.every((n) => n > 0);
print(allGreaterThan0);



// find - to find a certain item in the array based on a condition
print("---- find()");
let stock = [
    { item: "ketchup", quantity: 32 },
    { item: "mayo", quantity: 35 },
    { item: "hot sauce", quantity: 38 }
];
let mayo = stock.find((s) => s.item === 'mayo');
print(mayo);



// findIndex
let mayoIndex = stock.findIndex((s) => s.item === 'mayo');
print(mayoIndex);



// sort
print("---- sort()");
print(names);
let alph = names.sort();
print(alph);
let sortedNums = nums2.sort((a, b) => a - b);    // if a - b is negative, then a sits where it is without swap happening.
print(sortedNums);
let sortedNumsReversed = nums2.sort((a, b) => b - a);
print(sortedNumsReversed);

