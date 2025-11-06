// one
// const myGreetings = function greet(personA, personB){
//     console.log("hi, " + personA + " and " + personB + "!");
// }

// myGreetings("Elia", "Giovanni");



//two
// function fullName(name, surname){
//     return "Name: " + name + ", Surname: " + surname ;
// }

// function printInfo(name, surname, course){
//     console.log(fullName(name, surname) + ", course" + course);
// }

// function printGrades(name, surname, grade){
//     console.log(fullName(name, surname) + ", grade" + grade);
// }

// printInfo("Marco", "Lurati", "Coding Foundations");
// printGrades("Marco", "Lurati", 4)



// three
// const grade = 5; // 0 ... 6,4 is passed

// if (grade >=4){
//     console.log("You passed the course!");
// }
//     else {
//         console.log("You failed!");
//     }


// if (grade ==6){
//     console.log("Excellent");
// }
// else if (grade >=5 && grade < 6){
//     console.log("Good")
// }
// else if (grade ==4 && grade <5){
//     console.log("Sufficient")
// }
// else {
//     console.log("Insufficient")
// }

//four
let grade = 0; // 0 ... 6,4 is passed


if (grade ==6){
    console.log("Excellent");
}
else if (grade >=5 && grade < 6){
    console.log("Good")
}
else if (grade ==4 && grade <5){
    console.log("Sufficient")
}
else if (grade > 6 || grade < 1){
    console.log("Impossibol - wrong grade")
}
else {
    console.log("Insufficient")
}


switch(grade){
    case 6:
        console.log("Excellent");
        breaj;
    case 5: 
        console.log("Good")

    default:
        console.log("undefined");
        break;
}