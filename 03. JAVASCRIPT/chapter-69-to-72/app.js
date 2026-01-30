// Javascript Objects:

// 1. create object
// 2. getting object values
// 3. update object value
// 4. add object value
// 5. delete object value

// var car = {
//     name: "Civic",
//     model: 2027,
//     company: "Honda",
//     availableColors: ["Black", "White", "Grey"],
//     price: 100_00_00_0,
//     auto: true
// }
// car.auto = false    // update
// car.door = 2        // add
// delete car.model    // delete


// console.log("price" in car);
// console.log("wheels" in car);
// console.log(car);
// console.log(car.otherDetail.wheels);


// var student = {
//     name: "Ali",
//     cnic: 48452385423828,
//     fatherName: "Ahmed",
//     rollno: 4201,
//     email: "aliahmed@gmail.com",
//     getDetail: function(){
//         return `hello and welcome! ${this.name} ${this.fatherName} ${this.rollno}`
//     } 
// }

// var studentDetail = student.getDetail()

// console.log(studentDetail);

var mobilePhones = {
    apple: {
        iphone12: {
            price: 150_000,
            color: "orange",
            memory: "64gb",
            name: "iphone12",
            image: ""
        },
        iphone13: {
            price: 190_000,
            color: "pink",
            memory: "512gb",
            name: "iphone13"
        }
    },
    sumsung: {
        s20: {
            price: 100_000,
            color: "purple",
            memory: "32gb"
        },
        s21: {
            price: 120_000,
            color: "red",
            memory: "16gb"
        }
    },
    infinix: {
        spark40: {
            price: 40_000,
            color: "white",
            memory: "16gb"
        },
    }
}

// console.log(mobilePhones.apple.iphone12.price);
// for (var mob in mobilePhones) {
//     // console.log(mob);
    
//     for (var phones in mobilePhones[mob]) {
//         console.log(mobilePhones[mob][phones]);
//     }
// }
