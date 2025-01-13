//alert("welcome");

console.log("JavaScript file is loaded successfully");

var number1 = 10;
var dicimelNumber = 45.94;
var name = "Hsoub";
var isNull = false;

const pi = 3.14;
const  academyName = "Hsoub";
console.log("Welcome, from console");
//document.write("Welcome");
//var heading = document.getElementById("title");
//heading.innerHTML = "Welcome to hsoub";

let firstNumber = 46;
let secondNumber = 10;
let sum = firstNumber + secondNumber
console.log("result is : " + sum);

let number2 = 20;
// Incrementing operator
number2++;
console.log(number2);
// Decrementing operator
number2--;
console.log(number2);

let x = 5, y = 10;
let result1 = x < y;
console.log(result1);

let  result2 = 5 < 7 && 6 < 9;
console.log(result2);

let result3 = 5 < 7 || 6 < 9;
console.log(result3);

let academy = "Hsoub";
// Get character by index
console.log(academy.charAt(1)); //prints 's'
console.log(academy[4]); //prints 'b'

// Get index of text
console.log(academy.indexOf("oub")); //prints '2'

// Get string length
console.log(academy.length);

// Extract a part of string
console.log(academy.substring(1, 4)); //prints 'sou'
console.log(academy.slice(1, 4)); //prints 'sou'
console.log(academy.substr(1, 3)); //prints 'sou'

// replace string
console.log(academy.replace("Hsoub", "Hsoub Academy")); //prints Hsoub Academy

// upper & lower case
console.log(academy.toUpperCase()); //prints HSOUB
console.log(academy.toLowerCase()); //prints hsoub

let currentDate = new Date();
console.log(currentDate);

let year = currentDate.getFullYear();
let month = currentDate.getMonth()+1;
let day = currentDate.getDate();
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();

let fullDateTime = year + '/' + month + '/' + day + ' - ' + hour + ':' + minute

console.log(fullDateTime);

let result4 = 14;
if (result4 >= 10){
    console.log("you succeed")
} else{
    console.log("you failed")
}

let w = 20, z = 10;
let operator = '+'
switch (operator){
    case '+':
        console.log(w + z);
        break;
    case '-':
        console.log(w - z);
        break;
    case '*':
        console.log(w * z);
        break;
    case '/':
        console.log(w / z); 
        break;  
}

for(i = 1;  i < 10; i++){
console.log(i);
}

let counter = 0;
while (counter<10){
    console.log(counter);
    counter++;
}

let counter2 = 0;

do{
    console.log(counter2);
    counter2++;
}while (counter2 < 5 );
function sayHello(){
    let userName = document.getElementById("txtName").value;
    alert("Welcome, " + userName )
}
function summ(f, e){
    return f + e;
}
let firstNum = 20, secondNum = 45;

//alert(summ(firstNum, secondNum));

// DOM (Document Object Model)

let heading1 = document.getElementById("h1id");
console.log(heading1);
// كيف نغير محتوى العناصر باستخدام الدوم

heading1.innerHTML = "This is a title";

let paragraph = document.getElementsByClassName("content");
console.log(paragraph);
paragraph[0].innerHTML = "<u> This is a paragraph content </u>";

let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);
allParagraphs[1].innerHTML = "<b style = 'color: blue'> This is the second paragraph </b>";

const newParagraph = document.createElement("p");
newParagraph.innerHTML = "This is the newly paragraph content";
let divContent = document.getElementById("divContent");
divContent.appendChild(newParagraph);

// Arrays

let names = ["Es", "Aya", "Ahmed"];
let numbers = [3, 5, 9, 25];

console.log(names[2]);
console.log(names.length);

console.log(numbers[2]);    
console.log(numbers.length);

names.sort();
console.log(names);
console.log(names[2]);

for(i=0; i<names.length; i++){
    console.log(names[i]);
}

// Objects

let person = {
    name: "Es",
    age: 28,
    adress: 'Egypt, cairo, 18',
    isMarried: true
}

console.log(person.adress);

console.log(person);

//Scope
// local
function displayName(){
    let academyNamee = "Hsoub";
    console.log(academyNamee);
}
// global
let academyNamee = "Hsoub";
console.log(academyNamee);

// Events handling

function changeStyle(){
    let control = document.getElementById("txt1");

    control.style.backgroundColor = "biege";
    control.style.border = "2px solid orange";
}

//callBack

let heading2 = document.getElementById("h2ID");
heading2.addEventListener('click', function(){
    heading2.innerHTML = "you clicked on h2 title";
});

//Data Validation

function validate(){
    // let isValid = false;
    let age = document.getElementById("age").value;
    let isChecked = document.getElementById("agree").checked;

    // if (isChecked == true && !isNaN(age)){
    //     isValid = true;
    // } else {
    //     isValid = false;
    // }
    // return isValid;

    return isChecked && !isNaN(age);
}