
/* =====================================================
   1. Print 1 to 5
   ===================================================== */

function printOneToFive() {

    let output = "";

    let i = 1;

    while (i <= 5) {

        output = output + i + " ";

        i = i + 1;
    }

    document.getElementById("oneToFiveResult").innerHTML =
        output;
}


/* =====================================================
   2. Print 10 to 50
   ===================================================== */

function printTenToFifty() {

    let output = "";

    let i = 10;

    while (i <= 50) {

        output = output + i + " ";

        i = i + 10;
    }

    document.getElementById("tenToFiftyResult").innerHTML =
        output;
}


/* =====================================================
   3. Print 4, 7, 10, 13
   ===================================================== */

function printFourSeven() {

    let output = "";

    let i = 4;

    while (i <= 13) {

        output = output + i + " ";

        i = i + 3;
    }

    document.getElementById("fourSevenResult").innerHTML =
        output;
}


/* =====================================================
   4. Print 10 to 1
   ===================================================== */

function printTenToOne() {

    let output = "";

    let i = 10;

    while (i >= 1) {

        output = output + i + " ";

        i = i - 1;
    }

    document.getElementById("tenToOneResult").innerHTML =
        output;
}


/* =====================================================
   5. Print 95, 90, 85 ... 5
   ===================================================== */

function printNinetyFiveToFive() {

    let output = "";

    let i = 95;

    while (i >= 5) {

        output = output + i + " ";

        i = i - 5;
    }

    document.getElementById("ninetyFiveResult").innerHTML =
        output;
}


/* =====================================================
   6. Sum of 2, 3, 4, 5, 6 Using While Loop
   ===================================================== */

function sumTwoToSix() {

    let sum = 0;

    let i = 2;

    while (i <= 6) {

        sum = sum + i;

        i = i + 1;
    }

    document.getElementById("sumTwoSixResult").innerHTML =
        "Sum is : " + sum;
}


/* =====================================================
   7. Sum of 2, 3, 4, 5, 6 Using For Loop
   ===================================================== */

function sumTwoToSixFor() {

    let sum = 0;

    for (let i = 2; i <= 6; i = i + 1) {

        sum = sum + i;
    }

    document.getElementById("sumTwoSixForResult").innerHTML =
        "Sum is : " + sum;
}


/* =====================================================
   8. Print First n Natural Numbers
   ===================================================== */

function printNaturalNumbers() {

    let n = Number(
        document.getElementById("naturalNumber").value
    );

    let output = "";

    for (let i = 1; i <= n; i = i + 1) {

        output = output + i + " ";
    }

    document.getElementById("naturalResult").innerHTML =
        output;
}


/* =====================================================
   9. Sum of First n Natural Numbers
   ===================================================== */

function sumNaturalNumbers() {

    let n = Number(
        document.getElementById("sumNaturalNumber").value
    );

    let sum = 0;

    for (let i = 1; i <= n; i = i + 1) {

        sum = sum + i;
    }

    document.getElementById("sumNaturalResult").innerHTML =
        "Sum of n natural numbers is : " + sum;
}


/* =====================================================
   10. Factorial of a Number
   ===================================================== */

function findFactorial() {

    let n = Number(
        document.getElementById("factorialNumber").value
    );

    let fact = 1;

    for (let i = n; i >= 1; i = i - 1) {

        fact = fact * i;
    }

    document.getElementById("factorialResult").innerHTML =
        "Factorial of " + n + " is : " + fact;
}

