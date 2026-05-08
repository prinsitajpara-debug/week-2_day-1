	javascript fundamental

1.Variable & Types :-
	Var:-
-	Old way to create variables.
-	Function scoped.
-	Can be redeclare.
Ex:-
Var name = “prinsi”;
Console.log(name);

Var x = 10;
Var x = 20;     //variable can be redclare
Console.log(x);    //20

	Let:-
-modern way to create variable.
-Block scoped.
-can no redeclare in same scope.
-in same scope not redeclare variable.

Ex 1:-
Let a=5;
a=10; // allowed

let a=15;  // error




Ex 2:-

Let name =”prinsi”;
{
	Let name = “drashti”;
	Console.log(name); // both name print because both variable declare in different scope.
}
Console.log(name);

Output:-
Prinsi
drashti


	Const:-
-value should not can be check.
-block scoped.
-can not be reassign.

We use only let and const because code is safe and use in block scoped and change the value.

	Primitive types:-

1.string:-
let name= “prinsi” ; // string

2.Number:-
Let number =18;  //number
3.boolen:-
Let islogin = true;
	4.null:-
	Let data  = null;
	
5.undefiend:-
Let city;
Console.log(city);  // undefined value
6.symbol:-
Let id = symbol(“id”)
7.bigint:-
Let big = 12345688766nmmm
	
	Type of operator:-
typeof "Hello"; // string
typeof 10; // number
typeof true; // Boolean

console.log(typeof "Hi"); // string
console.log(typeof 25); // number
console.log(typeof false); // boolean
console.log(typeof undefined); // undefined

	Type Coercion:-

Ex 1:-
‘5’ + 5  
//’5’ is string + is automatically convert number into string
 == operator use to convert automatically.
	


Ex 2 :-
	‘5’ + 5
	//=== operator is check the value and data type.if both same give 
	Output true otherwise false.
	Template Literals:-
-use to variable insertion
Ex:-
let name = "Prinsi";
console.log(`Hello ${name}`);

2.Functions :-
	Function Declaration:-
-	Function declare using normal way.

Ex:-
function hello() {
   console.log("Hi");
}
hello();

	Function Expression:-
-in function expression function store inside variable
	Ex:-
	const greet = function() {
           console.log("Hello");
           };
          greet();


	Arrow Function:-
-short modern syntax
	Ex:-
	const add = (a, b) => a + b;
console.log(add(2, 3));   // 5

	Default parameters:-
-Default parameters allow you to give a default value to function parameters.
-If the user does not pass a value, JavaScript uses the default value.
Ex:-
function greet(name = "prinsi") {
   console.log(name);
}
greet();

	Rest Parameters (...args):-
- Collects multiple values into ONE array.
- Rest parameter must be last parameter.
Ex:-
function numbers(...args) {
   console.log(args);
}
numbers(1, 2, 3, 4);

//output:-[1,2,3,4]

	Spread Operator (...):-
-Spread breaks array/object into individual values.
Ex:-
let arr = [1, 2, 3];
console.log(...arr);
//output :- 1 2 3

	Higher-Order Functions:-
- takes another function as argument.
Ex:-
function greet(name) {
   return "Hello " + name;
}
function processUser(fn) {
   console.log(fn("Prinsi"));
}
processUser(greet);

//in this code fn = parameter.
//processUser() receive another function.


- Function Returning Another Function

Ex:-

function multiply(x) {
return function(y) {
      return x * y;
   };
}
const double = multiply(2);
console.log(double(5));  // output 10

	IIFE (Immediately Invoked Function Expression):-
- Function that runs immediately after creation.
-private scope.
-avoiding global variable.
Ex:-

(function() {
     let secret = "Hidden";
console.log(secret);
})();

3. Objects & Destructuring:-
	Object Creation:-
-An object stores data in key : value pairs.
Ex:-
const user = {
   name: "Prinsi",
   age: 22,
   city: "Ahmedabad"
};
	Acess object value:-
-Dot Notation
Ex:-
console.log(user.name);’
console.log(user.age);
-Bracket notation
Ex:-
	console.log(user["city"]);

	Object Mutation (Change Object Data)
-Objects can be modified after creation.
Ex:-
User.age = 25;
console.log(user);
-Add New Property:-
user.country = "India";
console.log(user);
- Delete Property
delete user.city;
console.log(user);

	Shorthand Properties:-
-Used when variable name and object key name are same
- Less code
-Cleaner 
-Mostly used in React and APIs
Ex:-
const name = "Prinsi";
const age = 22;
const user = {
   name,
   age
};
console.log(user);

	Computed Keys:-
-Dynamic object keys.
Ex:-
const keyName = "email";
const user = {
   [keyName]: "prinsi@gmail.com"
};
console.log(user);

//output
{
  email: "prinsi@gmail.com"
}
	Destructuring:-
- Extract values from object into variables.
Ex:-
const user = {
   name: "Prinsi",
   age: 22
};
const { name, age } = user;
console.log(name);
console.log(age);

	Rename During Destructuring:-
- Sometimes variable name should be different.
Syntax:-
const { name: userName } = user;

Ex:-
const user = {
   name: "Prinsi",
   age: 22
};
const { name: userName } = user;
console.log(userName);  // prinsi

	Nested Destructuring:-
- When object contains another object.
Ex:-
const user = {
   name: "Prinsi",
   address: {
      city: "Ahmedabad",
      state: "Gujarat"
   }
};

const {
   address: { city, state }
} = user;

console.log(city);
  console.log(state);
4. Arrays & Array Methods in JavaScript:-
	Map():-
-Used to transform every element of an array.
 -Returns a new array
 -Same length as original array
Syntax:-

array.map((item) => {
return modifiedItem;
});

ex:-

const numbers = [1, 2, 3];
const doubled = numbers.map((num) => {
   return num * 2;
});
console.log(doubled);
//output
[2,4,6]

	filter():-
-Used to select elements based on condition.
-Returns new array
-Can return fewer elements
Ex:-
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter((num) => {
return num % 2 === 0;
});
console.log(even);

	reduce():-
-Used to reduce array into single value.
- Returns one value
Syntax:-
array.reduce((accumulator, currentValue) => {
   return updatedAccumulator;
}, initialValue);

Ex:-
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => {
   return acc + curr;
}, 0);
console.log(sum);
//10
	forEach():-
-Used to loop through array.
-does not return array
Ex:-
const fruits = ["apple", "banana", "mango"];
fruits.forEach((fruit) => {
console.log(fruit);
});
//output
Apple
Banana
Mango


	find():-
-Returns first matching element.
Ex:-
const users = [
   { id: 1, name: "Prinsi" },
   { id: 2, name: "drashti" }
];
const user = users.find((u) => {
   return u.id === 2;
});
console.log(user);
//output: id: 2, name: "drashti

	findIndex():-
- Returns index of first matching element.
Ex:-
const numbers = [10, 20, 30];

const index = numbers.findIndex((num) => {
   return num === 20;
});

console.log(index);
//output ---    1

	some():-
- Checks if at least one element satisfies condition.
-return true or false
Ex:-


const numbers = [1, 3, 5, 8];
const hasEven = numbers.some((num) => {
   return num % 2 === 0;
});
console.log(hasEven);
//output
True

	every():-
-all element condition satisfy.
Ex:-
const numbers = [2, 4, 6];

const allEven = numbers.every((num) => {
   return num % 2 === 0;
});

console.log(allEven);
//output:-
True

	flat():-
- Used to flatten nested arrays.
Ex:-
const arr = [1, 2, [3, 4], [5, 6]];
const flatArr = arr.flat();
console.log(flatArr);

//output:-
[1,2,3,4,5,6]



	flatMap():-
-Combination of map() + flat()
Ex:-
const words = ["hello world", "javascript array"];
const result = words.flatMap((word) => {
   return word.split(" ");
});
console.log(result);

//output:-
[hello,word,javascript,array]

	Chaining Methods:-
-You can combine methods together.

	Spread Operator with Arrays:-
- Used to copy or merge arrays

	Array Destructuring
- Extract values from array into variables.
Ex:-
const colors = ["red", "green", "blue"];
const [first, second] = colors;	
console.log(first);
console.log(second);

//output:-
red
green


