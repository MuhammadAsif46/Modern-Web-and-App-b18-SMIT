// Javascript objects Constructor:

var student = {
    name: "Ali",
    father: "Raza",
    age: 23,
    grade: 12
}
var student2 = {
    name: "faraz",
    father: "ahmed",
    age: 20,
    grade: 10
}

function Student(name, father, age, grade) {
    this.name = name;
    this.father = father;
    this.age = age;
    this.grade = grade;
}


var smitStudent1 = new Student("Smith", "Clerk", 16, "10th")
var smitStudent2 = new Student("Jhon", "Elia", 56, "11th")

console.log(smitStudent1);
console.log(smitStudent2);
