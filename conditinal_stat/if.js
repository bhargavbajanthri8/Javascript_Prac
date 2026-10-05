//6 loigcs using if statement
let n=10;
//check if positive number
if(n>0){
    console.log("n is positive number");
}
//check if even number
if(n%2==0){
    console.log("n is even number");
}
//check if the number divisible b bothe 2 and 5

if(n%2==0 && n%5==0){
    console.log("the number is divisible by both 2 and 5");
}
//check if the number the number either positive or even or greater than 100
let n1=11;
if (n>0 || n%2==0 || n>100){
    console.log("the given number is either divisible by 2 or postive or greater than 100");
}
//check valid traingle
let a = 5;
let b = 6;
let c = 7;
if(a+b>c && b+c>a && a+c>b){
    console.log("Valid triangle");
}

//validate if the given number is greater then the other three numbers or an even number
let x=20;
let x1=21;
let x2=16;
let x3=10;
if((x>x1 && x>x2 && x>x3)||(x%2==0)){
   console.log("May be the number is greater than the other 3 numbers or it is an even number"); 
}


