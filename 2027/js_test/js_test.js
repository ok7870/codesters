let obj = {
  name: "John",
  age: 30,
  greet: function() {
    return "Hello, " + this.name;
  }
};
console.log(obj.greet()); // Outputs: "Hello, John"