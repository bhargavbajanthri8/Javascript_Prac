//6 loigcs using if else statement

//check the given nummber is positive or negative
let number=-10;
if(number>=0){
    console.log("given number is positive");
}
else{
    console.log("given number is negative");
}
//even or odd
let number1 = 17;
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
//guess the if the addition of two numbers is even  or odd withou adding the numbers
let a1=20;
let a2=35;
if((a1%2==0&&a2%2==0)||(a1%2!=0&&a2%2!=0)){
    console.log("the addition result would be even");
}
else{
    console.log("the addition result would be Odd");
}
//check if the given triangle is right angle triangle t1 t2 t3

let t1=3;
let t2=4;
let t3=5;
if(t1**2+t2**2==t3**2 || t2**2+t3**2==t1**2 || t1**2+t3**2==t2**2)
{
    console.log("given sides forms right angle triangle");
}
else{
     console.log("given sides doesnt forms right angle triangle");
}
// given year is leap year or not

let year = 2100;
if (
    year % 400 === 0 ||
    (year % 4 === 0 && year % 100 !== 0)
) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}
//checking if the given quadratice expression formed by q1,q2,q3 which is q1*x**2+q2*x+q3=0
let q1=1;
let q2=10;
let q3=25;
let q_ex=q2**2-(4*q1*q3);
if(q_ex>=0){
    console.log("equation has real roots");
}
else{
     console.log("equation has Imaginary roots");
}