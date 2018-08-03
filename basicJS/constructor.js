const Person = function(first="kunle", last="babatunde", age=29, likes=["money","family","others"]){
  //initialization
  this.first = first;
  this.last = last;
  this.age = age;
  this.likes = likes;
}

Person.prototype.getSummary = function(){
  let biog = `${this.first} ${this.last} is ${this.age} years old`;
  this.likes.map((like)=>{
      biog += `\n${this.first} likes ${like}`;
  });
  return biog;
}

Person.prototype.setName = function(fullname){
  let arr = fullname.split(' ');
  this.first = arr[0];
  this.last = arr[1];
}

const Person1 = new Person("Tal","Babatunde",27,["husband","career","family","others"]);
const Person2 = new Person();
Person1.setName("Jessica Dorishmond")
console.log(Person1.getSummary());


Person.prototype.getSummary = function(){
  return "testing";
}

console.log(Person2.getSummary());