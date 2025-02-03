// *********    CHAPTER ONE       **********

// ALERTS

// Question 1; Write a script to greet your website visitor using JS alert box.

alert("Thank you for comming Saylani Mass IT Training Program");

// Question 2; Write a script to display following message on your web page:

alert("Error! please enter a valid password.");

// Question 3;  Write a script to display following message on your webpage: (Hint : Use line break)

alert("Welcome to js Land \n Happy Coding");

// Question 4; Write a script to display following messages in sequence:

alert("Welcome to js Land");

alert("Happy Coding");

// Question 5; Generate the following message through browser’s developer console:

console.log("hello... I can run JS through my web browser's console");

//   ************    CHAPTER TWO     ************

// VARIABLES FOR STRINGS

// Question 1; Declare a variable called username.

var userName;

// Question 2; Declare a variable called myName & assign to it a string that represents your Full Name.

var myName = "Muhammad Ali";

/* Question 3; Write script to
a) Declare a JS variable, titled message.
b) Assign “Hello World” to variable message
c) Display the message in alert box.*/

var message = "Hello World";
alert(message);

/*Question 4; Write a script to save student’s bio data in JS variables and
show the data in alert boxes.*/

// Declare variables for student bio data

var studentName = "Muhammad Ali";
var age = 22;
var course = "Web development";
var institute = "Saylani Mass IT Training";

alert(studentName);
alert(age);
alert(course);
alert(institute);

// Question 5. Write a script to display the following alert using one JS variable:

var pizzaPattern = "PIZZA \nPIZZ \nPIZ \n PI \n P";

alert(pizzaPattern);

/*Question 6; Declare a variable called email and assign to it a string that represents your Email 
Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)*/

var email = "ma0637579@gmail.com";
alert("My Email Address is " + email);

/*Question 7; Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the
following message in an alert box:*/

var book = "A smarter way to learn JavaScript";

alert("I am trying to learn from the Book " + book);

// Question 8. Write a script to display this in browser through JS

document.write("Yeah! I can write HTML content through JavaScript.");

// Question 9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);

document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

//     ************   CHAPTER 3       ************

// VARIABLES FOR NUMBERS

// Question 1; Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 22;
alert(age);

/* Question 2; Declare & initialize a variable to keep track of how many times a visitor has visited a web page.
  Show his/her number of visits on your web page. For example: “You have visited this site N times”.*/

var visitCount = 14;
alert("You have visited this site " + visitCount + " times ");

/* Question 3; Declare a variable called birthYear & assign to it your birth year. Show the following message
 in your browser:*/

document.write("My Birth year is 2003");

document.write("Data type of my declared variable is number");

/* Question 4; A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:

a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to order

Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”.*/

var visitorsName = "John Doe";
var productTitle = "T-Shirt";
var quantity = 5;
var storeName = "xyz clothing store";

document.write(
  visitorsName +
    " ordered " +
    quantity +
    " " +
    productTitle +
    " (s) on " +
    storeName +
    " . "
);
