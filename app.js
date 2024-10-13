// Chapter 31 - 34 (Date &amp; Time)

// 1.

var dObj = new Date();


// 2.

var dStr = new Date().toString();

// 3.

var day = new Date().getDay();


// 4.

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
alert(dayNames[d.getDay()]);


// 5.

var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();


// 6.

var later = new Date(2020, 11, 31);


// 7.

var date1992 = new Date(1992, 1, 2);

// 8.

var refDate = new Date(1980, 0, 1);
alert(refDate.getTime());

// 9.

var date = new Date();
date.setFullYear(2023);

// 10.

function changeMonthToJanuary(date) {
    date.setMonth(0);
    return date;
}


// 11.

date.setDate(day);


// 12.

function changeMinutes(date, newMinutes) {
    date.setMinutes(newMinutes);
}


// 13.

function addHours(date, hours) {
    date.setHours(date.getHours() + hours);
}


// 14.

function calculateAge(birthDate) {
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


// Chapter 35-37 (Functions).

// 1.

function displayAlert() {
}

// 2. 

function askName() {
    var userName = prompt("Enter name");
}

// 3.

function callTwoFunctions(func1, func2) {
    func1();
    func2();
}

// 4.

function getName() {
    var name = prompt("Enter name");
    alert(name);
}
getName();

// 5. 

function concat(a, b, c) {
}

// 6.

function concatenateStrings(str1, str2) {
    var result = str1 + str2;
    return result;
}

// 7.

function multiply(a, b, c) {
    var result = a * b * c;
    return result;
}

// 8. 

function calculateAverage(numbers) {
    var sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}

// 9.

function sum(a, b) {
    return a + b;
}

// 10.

function countLetters(word) {
    return word.length;
}

// 11.

function countLetters(word) {
    return word.length;
}

// 12.

function setYear(date, year) {
    date.setFullYear(year);
}

// 13.

function getAge(dateOfBirth) {
    var today = new Date();
    var age = today.getFullYear() - dateOfBirth.getFullYear();
    var monthDiff = today.getMonth() - dateOfBirth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
        age--;
    }
    return age;
}

// 14.

function checkPresence(word, array) {
    return array.includes(word);
}

// 15.

function repeatLetter(letter) {
    return letter.repeat(10);
}

// 16.

function reverseArray(arr) {
    return arr.reverse();
}

// Chapter 38 (Local vs. Global Variables).

// 1.

function showLocalVariable() {
    var localVar = "I am local";
    console.log(localVar);
}

// 2.

var globalVar = "I am global";

function showGlobalVariable() {
    console.log(globalVar);
}

// Chapter 39-40 (Switch Statements)

// 1.

var value = 2;

switch (value) {
    case 1:
        console.log("Value is 1");
        break;
    case 2:
        console.log("Value is 2");
        break;
    default:
        console.log("Unknown value");
}


// 2.

var cityName = prompt("Enter city name");

switch (cityName.toLowerCase()) {
    case 'new york':
        alert("You are in New York");
        break;
    case 'london':
        alert("You are in London");
        break;
    default:
        alert("City not recognized");
}


// FUNCTIONS, SWITCH STATEMENTS, WHILE... DO- WHILE LOOPS.

// 1.

function power(a, b) {
    return Math.pow(a, b); // Or: a ** b;
}


// 2.

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


// 3.

function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
    var S = calculateS(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}



// 4.

function calculateAverage(marks) {
    var sum = marks.reduce((a, b) => a + b, 0);
    return sum / marks.length;
}

function calculatePercentage(marks, totalMarks) {
    var obtainedMarks = marks.reduce((a, b) => a + b, 0);
    return (obtainedMarks / totalMarks) * 100;
}

function mainFunction(marks, totalMarks) {
    var avg = calculateAverage(marks);
    var percent = calculatePercentage(marks, totalMarks);
    console.log("Average:", avg);
    console.log("Percentage:", percent + "%");
}


// 5.

function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}


// 6.

function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}


// 7.

function countConsecutiveVowels(text) {
    var count = 0;
    for (var i = 0; i < text.length - 1; i++) {
        var pair = text[i] + text[i + 1];
        switch (pair.toLowerCase()) {
            case 'aa': case 'ae': case 'ai': case 'ao': case 'au':
            case 'ea': case 'ee': case 'ei': case 'eo': case 'eu':
            case 'ia': case 'ie': case 'ii': case 'io': case 'iu':
            case 'oa': case 'oe': case 'oi': case 'oo': case 'ou':
            case 'ua': case 'ue': case 'ui': case 'uo': case 'uu':
                count++;
                break;
        }
    }
    return count;
}


// 8.

function toMeters(km) {
    return km * 1000;
}

function toFeet(km) {
    return km * 3280.84;
}

function toInches(km) {
    return km * 39370.1;
}

function toCentimeters(km) {
    return km * 100000;
}


// 9.

function calculateOvertimePay(hoursWorked) {
    var overtimeHours = hoursWorked - 40;
    if (overtimeHours > 0) {
        return overtimeHours * 12;
    }
    return 0;
}


// 10.

function calculateNotes(amount) {
    var hundreds = Math.floor(amount / 100);
    amount %= 100;
    var fifties = Math.floor(amount / 50);
    amount %= 50;
    var tens = Math.floor(amount / 10);

    return {
        hundreds: hundreds,
        fifties: fifties,
        tens: tens
    };
}
















