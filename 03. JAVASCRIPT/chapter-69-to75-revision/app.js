// Javascript Objects Revision:


// var car = {
//     name: "Civic",
//     model: 2022,
//     isAuto: true,
//     color: ['black', 'grey'],
// }

// car.name = "Mehran"
// car.price = 300_00_00_0

// delete car.isAuto
// // console.log(car.model);
// // console.log(car);
// console.log("otherDetials" in car);


// var car = {
//     name: "Civic",
//     model: 2022,
//     isAuto: true,
//     color: ['black', 'grey'],
//     price: 300_00_00_0,
//     getDetails: function(){
//         return `${this.name} ${this.price} ${this.model}`
//     }
// }

// console.log(car.getDetails());


// var std1 = {
//     name: "Ahmed",
//     grade: 10,
//     cnic: 6345786456353,
//     DOB: "12 feb"    
// }

// var std2 = {
//     name: "Ali",
//     grade: 12,
//     cnic: 6344486456353,
//     DOB: "11 jan"    
// }


// function Student(username, age, cnic, grade){
//     this.name = username,
//     this.age = age,
//     this.cnic = cnic,
//     this.grade = grade
// }

// // console.log(new Student());

// var std1 = new Student("Farhan", 13, 784567834538, '10th')
// var std2 = new Student("Ali", 11, 784567834538, '12th')

// console.log(std1);
// console.log(std2);


// function Employee(firstName, lastName) {
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.fullName = function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// var emp = new Employee("Ali", "Raza")
// console.log(emp);

// console.log(new Employee().fullName());


// var emp1 = new Employee("Farhan", "Ahmed")
// var emp2 = new Employee("Ali", "Sarfaraz")

// console.log(emp1);
// console.log(emp2)

// console.log(new Student());

// var std1 = new Student("Farhan", 13, 784567834538, '10th')
// var std2 = new Student("Ali", 11, 784567834538, '12th')

// console.log(std1);
// console.log(std2);


// function Student() {
//     this.firstName = "Ali",
//     this.lastName = "Raza"
// }

// Student.prototype.fullName = function () {
//     return `${this.firstName} ${this.lastName}`
// }

// console.log(new Student());


// var std2 = {
//     name: "Ali",
//     grade: 12,
//     cnic: 6344486456353,
//     DOB: "11 jan",
//     getDetail: function(){
//         return `${this.name}`
//     }
// }

// console.log('price' in std2); // false
// console.log('getDetail' in std2); // true


var mobiles = {
    apple: {
        iphone12: {
            name: "Iphone 12",
            price: '$1200',
            color: 'pink'
        },
    },
    sumsung: {
        s25: {
            name: "S25",
            price: '$1100',
            color: 'red'
        },
    },
    nokia: {
        nokia_3310: {
            name: "nokia_3310",
            price: '$1500',
            color: 'purple'
        },
    }
}


// console.log(mobiles);

for (var key in mobiles) {
    for (var mob in mobiles[key]) {
        
        console.log(mobiles[key][mob]);
    }
}

