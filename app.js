// understand what "this" is

// `this` is the Global space (e.g., "Window")

// `this` is used within a function to reference where the function
// is initially defined

// this function is defined with ES5 classic function syntax
// we can change what `this` refers to
let sayHello = function() {
  console.log("inside SayHello")
  console.log(this)
  console.log("Hello")
}

// this function is defined with the ES6 arrow syntax
// we can't alter the `this` using `bind`
let cantChangeThis = () => {
  console.log("inside SayHello")
  console.log(this)
  console.log("Hello")
}

let outerFunction = () => {
  sayHello();
}

let frog = {
  name: "Kermit"
}

let doggie = {
  doggieHello() {
    console.log("Inside doggieHello, this refers to:")
    console.log(this)
    console.log("woof")
  }
}

let kermitHello = sayHello.bind(frog) // set `this` to be `frog`
