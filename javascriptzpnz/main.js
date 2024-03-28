// // // // // // const student = {
// // // // // //     fullName: "abdulrehman",
// // // // // //     age: 20,
// // // // // //     Cjps: 5.5,
// // // // // //     inPass: true
// // // // // // };
// // // // // // student["FullName"] = "Ateeb";
// // // // // // console.log(student["FullName"]);

// // // // // // const product = {
// // // // // //     title: "Ball Pen",
// // // // // //     rating: 4,
// // // // // //     offer: 5,
// // // // // //     Price: 3000,
// // // // // // };


// // // // // // console.log(product);

// // // // // // const profile = {
// // // // // //     Name: "abdulrehman",
// // // // // //     isfollow: true,
// // // // // //     post: 124,
// // // // // //     followers: 5678,
// // // // // //     likes: 3444,
// // // // // //     Gmail: "rehmanenterprice123@gmail.com",
// // // // // //     paraghrap: "this is a simple paragraph for porfile",

// // // // // // }
// // // // // // console.log(typeof profile["isfollow"]);



// // // // // // let a = 3;
// // // // // // let b = 9;
// // // // // // let c = a + b;
// // // // // // console.log("a=", a, "& b=", b);
// // // // // // console.log("a+b=", a + b);
// // // // // // console.log(a - b);

// // // // // let a = 5;
// // // // // let b = 3;

// // // // // // console.log("a");

// // // // // console.log("5>3 ", a > b);



// // // // //logicaloperator
// // // // let a = 6;
// // // // let b = 5;

// // // // let cond1 = a < b;
// // // // let cond2 = a === 9;
// // // // console.log("!(5=9)=", !(a < b));


// // // // let color;
// // // // if (mode === "dark-mode") {
// // // //     color = "black";
// // // // }



// // // //coditional statment//

// // // // let age = 18;
// // // // if (age >= 18) {
// // // //     console.log("your eligible for voting");
// // // // }
// // // // if (age < 18) {
// // // //     console.log("your not eligible ");
// // // // }


// // // // let mode = "light";
// // // // let color;
// // // // if (mode === "dark") {
// // // //     color = "black";
// // // // }
// // // // if (mode === "light") {
// // // //     color = "white";
// // // // }
// // // // console.log(color);



// // // // let age = "25";
// // // // if (age >= 18) {
// // // //     console.log("vote");
// // // // } else {
// // // //     console.log("not Vote");
// // // // }


// // // // let age = 16;
// // // // if (age <= 18) {
// // // //     console.log("vote");
// // // // } else {
// // // //     console.log("do not vote");
// // // // }



// // // //student Name & Atendance//

// let student = "rehman";
// // alert(student1);
// let atendance1 = 28;
// if (atendance1 <= 28) {
//     console.log("Good Profmence");
//     alert("good Profammence");
// } else {
//     alert("you are filled in this class");

// }

// let student2 = "danyal";
// alert(student2);
// let atendance2 = 28;
// if (atendance2 <= 26) {
//     console.log("Good Profmence");
//     alert("good Profammence");
// } else {
//     alert("you are filled in this class");


// }
// let student3 = "kiran";
// alert(student3);
// let atendance3 = 22;
// if (atendance3 <= 26) {
//     console.log("Good Profmence");
//     alert(num, "good Profammence");
// } else {
//     alert("you are filled in this class");
// }



// // var targetNum = Math.floor(Math.random() * 10) + 1;

// // var userInp = parseInt(prompt("Guess the number"));
// // if (!userInp) {
// //     alert("invalid input");
// // }
// // while (userInp != targetNum) {
// //     userInp = parseInt(prompt("Wrong Guess the number again"));
// //     if (userInp === targetNum) {
// //         alert("congrats you win a Rooh afza");
// //         break;
// //     }
// //     console.log(userInp, targetNum);
// // }

/////Gaming of number //
var targetNum = Math.floor(Math.random() * 10) + 1;
var userInp = parseInt(prompt("gusses the number"));
if (!userInp) {
    alert("please enter the Valid Number");

}
while (userInp != targetNum) {
    userInp = parseInt(prompt("Wrong the gusses the number"));
    if (userInp === targetNum) {
        alert("congrates you win the Mobile");
        break;
    }
    console.log(userInp, targetNum);
}


// // let num = 28;
// // if (num % 1 === 0) {
// //     console.log("the number is even");

// // } else {
// //     console.log(" the number old");
// // }


// //conditional statament//


// //  let mode = "dark"

// //  let  color;


// //  if mode



// let num = prompt("Enter your number ");
// if (num % 5 === 0) {
//     console.log(num, "is Multiple of 5");
// } else {
//     console.log(num, "is not a multiple Number of 5")
// }




// //practice of grade //
// let score = prompt("Enter Youre Score (0-100):");
// let grade;
// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if (score >= 80 && score <= 89) {
//     grade = "B";
// } else if (score >= 70 && score <= 79) {
//     grade = "C";
// } else if (score >= 60 && score <= 69) {
//     grade = "D";
// } else if (score >= 0 && score <= 59) {
//     grade = "Fail";
// }


// console.log("According to your Scores, your grade was: ", grade);


// let score = prompt("please enter your Score (0-100):")
// let grade;
// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if (score >= 80 && score <= 89) {
//     grade = "B";
// } else if (score >= 70 && score <= 79) {
//     grade = "C";
// } else if (score >= 60 && score <= 69) {
//     grade = "D";
// } else if (score >= 0 && score <= 59) {
//     grade = "fail"
// }
// console.log("Acording to your Score yor grade was : ", grade);