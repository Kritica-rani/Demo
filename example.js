// const test = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const result = Object.entries(test);
// console.log(result);
// const result2 = result.map((ele) => ele[1]);
// console.log(result2);

// for (property in test) {
//   console.log(test[property]);
// }

console.log(this);

function Test() {
  console.log("this inside function", this);
}
Test();

const object1 = {
  name: "kritica",
  place: "Bihar",
};

const object2 = {
  name: "puja",
  place: "howrah",
};

var getDetails = function () {
  console.log(this.name, this.place);
};
// function borrowing
getDetails.apply(object2, ["India", "Asia"]);

//
const result = getDetails.bind(object2);
result();

function Outer() {
  var a = 100;
  function inner() {
    var b = 200;
    console.log(a);
    function supperInner() {
      var b = 300;
      console.log(a + b);
    }
    supperInner();
  }
  inner();
}
Outer();

function x() {
  var a = 7;
  return function y() {
    console.log(a);
  };
}
var z = x();
console.log(z);
// 1000 lines of code

z();

function Test() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
Test();

document.getElementById("btn").addEventListener("click", function fn() {
  console.log("hello");
});
console.log("start");
setTimeout(function fn() {
  console.log("hello");
}, 1000);
const result = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log("end");

var a = 10;
var b = 200;

function fn() {
  console.log("helllo world");
  setTimeout(function () {
    console.log("inside setTimeout");
  }, 5000);
}
function Sum(num1, num2) {
  console.log(num1 + num2);
}
fn();
Sum(a, b);

console.log("end");
setTimeout(() => {
  console.log("setttimg....");
});

console.log("start");
setTimeout(() => {
  console.log("inside setTimeout");
});

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((response) => console.log(response));
console.log("end");
console.log("Start");

fetch("https://api.example.com/data")
  .then((response) => {
    console.log("API response received");
  })
  .catch((err) => console.log(err));

setTimeout(() => console.log("Timeout complete"), 0);

console.log("End");
