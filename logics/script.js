
/* =====================================================
   1. Average of 3 Numbers
   ===================================================== */

function averageThree() {

    let a = Number(document.getElementById("avg1").value);

    let b = Number(document.getElementById("avg2").value);

    let c = Number(document.getElementById("avg3").value);

    let average = (a + b + c) / 3;

    document.getElementById("avgResult").innerHTML =
        "Average = " + average;
}


/* =====================================================
   2. Average of 3 Numbers Using DOM
   ===================================================== */

function averageThreeDOM() {

    let a = Number(document.getElementById("domAvg1").value);

    let b = Number(document.getElementById("domAvg2").value);

    let c = Number(document.getElementById("domAvg3").value);

    let total = a + b + c;

    let average = total / 3;

    document.getElementById("domAvgResult").innerHTML =
        "Average = " + average;
}


/* =====================================================
   3. Sum of First n Natural Numbers
      Without Loop
   ===================================================== */

function sumNatural() {

    let n = Number(document.getElementById("sumN").value);

    let sum = n * (n + 1) / 2;

    document.getElementById("sumResult").innerHTML =
        "Sum = " + sum;
}


/* =====================================================
   4. Average of First n Natural Numbers
      Without Loop
   ===================================================== */

function averageNatural() {

    let n = Number(document.getElementById("averageN").value);

    let average = (n + 1) / 2;

    document.getElementById("averageNResult").innerHTML =
        "Average = " + average;
}


/* =====================================================
   5. Profit Percentage
   ===================================================== */

function profitPercentage() {

    let cp = Number(document.getElementById("costPrice").value);

    let sp = Number(document.getElementById("sellingPrice").value);

    let profit = sp - cp;

    let percentage = (profit / cp) * 100;

    document.getElementById("profitResult").innerHTML =
        "Profit = " + profit +
        "<br>Profit Percentage = " + percentage + "%";
}


/* =====================================================
   6. Simple Interest
   ===================================================== */

function simpleInterest() {

    let p = Number(document.getElementById("principal").value);

    let r = Number(document.getElementById("rate").value);

    let t = Number(document.getElementById("time").value);

    let si = (p * r * t) / 100;

    document.getElementById("interestResult").innerHTML =
        "Simple Interest = " + si;
}


/* =====================================================
   7. Missing Angle of Triangle
   ===================================================== */

function missingAngle() {

    let angle1 = Number(document.getElementById("angle1").value);

    let angle2 = Number(document.getElementById("angle2").value);

    let angle3 = 180 - (angle1 + angle2);

    document.getElementById("angleResult").innerHTML =
        "Missing Angle = " + angle3 + "°";
}


/* =====================================================
   8. Last Digit of a Number
   ===================================================== */

function lastDigit() {

    let number = Number(
        document.getElementById("lastDigitNumber").value
    );

    let digit = number % 10;

    document.getElementById("lastDigitResult").innerHTML =
        "Last Digit = " + digit;
}


/* =====================================================
   9. Remove Last Digit
   ===================================================== */

function removeLastDigit() {

    let number = Number(
        document.getElementById("removeDigitNumber").value
    );

    let result = Math.floor(number / 10);

    document.getElementById("removeDigitResult").innerHTML =
        "After Removing Last Digit = " + result;
}


/* =====================================================
   10. First Digit of a 3-Digit Number
   ===================================================== */

function firstDigitThree() {

    let number = Number(
        document.getElementById("threeDigitNumber").value
    );

    let firstDigit = Math.floor(number / 100);

    document.getElementById("threeDigitResult").innerHTML =
        "First Digit = " + firstDigit;
}


/* =====================================================
   11. First Digit of a 5-Digit Number
   ===================================================== */

function firstDigitFive() {

    let number = Number(
        document.getElementById("fiveDigitNumber").value
    );

    let firstDigit = Math.floor(number / 10000);

    document.getElementById("fiveDigitResult").innerHTML =
        "First Digit = " + firstDigit;
}


/* =====================================================
   12. Celsius to Fahrenheit
   ===================================================== */

function celsiusToFahrenheit() {

    let celsius = Number(
        document.getElementById("celsius").value
    );

    let fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("celsiusResult").innerHTML =
        "Fahrenheit = " + fahrenheit + " °F";
}


/* =====================================================
   13. Fahrenheit to Celsius
   ===================================================== */

function fahrenheitToCelsius() {

    let fahrenheit = Number(
        document.getElementById("fahrenheit").value
    );

    let celsius = (fahrenheit - 32) * 5 / 9;

    document.getElementById("fahrenheitResult").innerHTML =
        "Celsius = " + celsius + " °C";
}


/* =====================================================
   14. Gross Salary
   ===================================================== */

function grossSalary() {

    let basic = Number(
        document.getElementById("basicSalary").value
    );

    let hra = Number(
        document.getElementById("hra").value
    );

    let da = Number(
        document.getElementById("da").value
    );

    let gross = basic + hra + da;

    document.getElementById("salaryResult").innerHTML =
        "Gross Salary = ₹" + gross;
}


/* =====================================================
   15. Swap Using Third Variable
   ===================================================== */

function swapWithThird() {

    let a = Number(
        document.getElementById("swapA").value
    );

    let b = Number(
        document.getElementById("swapB").value
    );

    let temp = a;

    a = b;

    b = temp;

    document.getElementById("swapThirdResult").innerHTML =
        "After Swap: A = " + a +
        ", B = " + b;
}


/* =====================================================
   16. Swap Without Third Variable
   ===================================================== */

function swapWithoutThird() {

    let x = Number(
        document.getElementById("swapX").value
    );

    let y = Number(
        document.getElementById("swapY").value
    );

    x = x + y;

    y = x - y;

    x = x - y;

    document.getElementById("swapWithoutResult").innerHTML ="After Swap: X = " + x +", Y = " + y;
}

