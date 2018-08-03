class PersonClass 
{
  constructor(name="NA", gpa=3.0, subjects=[]){
    this.name = name;
    this.gpa = gpa;
    this.subjects = subjects;
  }

  setSubjects(x=[])
  {
    this.subjects = x;
  }
  setName(myname)
  {
    this.name = myname;
  }
  setGPA(value)
  {
    if(value > 3.0) value = 3.0;
    this.gpa  += parseFloat(value)/(1.3);
  }
  getGPA(){
    return this.gpa;
  }
  getName(){
    return this.name;
  }
  getSubjects(){
    return this.subjects;
  }
}

class Summary extends PersonClass
{
  obj1 = new PersonClass();
  getSummary(){
    return (
      `My name is ${obj1.getName()}`
    );
  }
}

const P1 = new PersonClass();
P1.setName("Kunle Babatunde");
P1.setGPA(2.5);
P1.setSubjects(["Math","Computer Science","Physcis"]);
// console.log("subjects = ",P1.getSubjects());
// console.log("name = ",P1.getName());
// console.log("gpa = ",P1.getGPA());

const sum = new Summary();
console.log(sum.getSummary());