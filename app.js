// CHAPTER # 17-20

// Q NO 01: Declare and initialize an empty multidimensional array.(Array of arrays)

// ANS 01:
// const emptyMultiArray = [[]];
// emptyMultiArray.push([]); 
// emptyMultiArray[0].push(1); 

// Q NO 02: Declare and initialize a multidimensional array representing the following matrix:

// ANS 02:
// var matrix = [
//    [0, 1, 2, 3],
//    [1, 0, 1, 2],
//    [2, 1, 0, 1] ];
  
// Q NO 03:Write a program to print numeric counting from 1 to 10. 

// ANS 03:
// for (let i = 1; i <= 10; i++) {
//  console.log(i);
//}



// Q NO 04: Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// ANS 04:
// const tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
// const tableLength = parseInt(prompt("Enter the length of the multiplication table:"));
// if (isNaN(tableNumber) || isNaN(tableLength)) {
// console.log("Please enter valid numbers.");
//} else {
//  console.log(`Multiplication Table for ${tableNumber} up to ${tableLength}:\n`);
//  for (let i = 1; i <= tableLength; i++) {
//    const result = tableNumber * i;
//    console.log(`${tableNumber} x ${i} = ${result}`);
//  }
//}


// Q NO 05: Write a program to print items of the following array using for loop:fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// ANS 05:
//const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
//for (let i = 0; i < fruits.length; i++) {
//    console.log(fruits[i]);
//  }
  


// Q NO 06: 6. Generate the following series in your browser. See example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// ANS 06:
// a. Counting
//console.log("a. Counting:");
//for (let i = 1; i <= 15; i++) {
//  console.log(i);
//}

// b. Reverse counting
//console.log("\nb. Reverse counting:");
//for (let i = 10; i >= 1; i--) {
//  console.log(i);
//}

// c. Even
//console.log("\nc. Even:");
//for (let i = 0; i <= 20; i += 2) {
//  console.log(i);
//}

// d. Odd
//console.log("\nd. Odd:");
//for (let i = 1; i <= 19; i += 2) {
//  console.log(i);
//}

// e. Series
//console.log("\ne. Series:");
//for (let i = 1; i <= 10; i++) {
//  console.log(2 * i + "k");
//}


// Q NO 07: You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an 
//array.After searching, prompt the user whether the given item is found in the list or not. Example:
 
// ANS 07:
//var A = ["cake", "apple pie", "cookie", "chips", "patties"];

//var userInput = prompt("Enter an item to search for:");

//var found = false;

//for (var i = 0; i < A.length; i++) {
//  if (userInput.toLowerCase() === A[i].toLowerCase()) {
//    found = true;
//    break;
//  }
//}

//if (found) {
//  alert(userInput + " is found in the list.");
//} else {
//  alert(userInput + " is not found in the list.");
//}

// Q NO 08: Write a program to identify the largest number in the given array.A = [24, 53, 78, 91, 12].
 
// ANS 08:
//var A = [24, 53, 78, 91, 12];

//var largest = A[0];

//for (var i = 1; i < A.length; i++) {
//  if (A[i] > largest) {
//    largest = A[i];
//  }
//}
//console.log("The largest number in the array is: " + largest);

// Q NO 09: Write a program to identify the smallest number in the given array.
//A = [24, 53, 78, 91, 12] 

// ANS 09:
//var A = [24, 53, 78, 91, 12];

//var smallest = A[0];

//for (var i = 1; i < A.length; i++) {
//  if (A[i] < smallest) {
//    smallest = A[i];
//  }
//}
//console.log("The smallest number in the array is: " + smallest);

// Q NO 10: Write a program to print multiples of 5 ranging 1 to 100. 

// ANS 10:
//for (var i = 1; i <= 100; i++) {
//    if (i % 5 === 0) {
//      console.log(i); // Print the multiple of 5
//    }
//  }
  
// CHAPTER # 21-25

// Q NO 01: Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// ANS 01:
//var firstName = prompt("Enter your first name:");

//var lastName = prompt("Enter your last name:");

//var fullName = firstName + " " + lastName;

//alert("Hello, " + fullName + "! Welcome.");

// Q NO 02: Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// ANS 02:
//var userInput = prompt("Enter your favorite mobile phone model:");

//var inputLength = userInput.length;

//document.write("The length of your input is: " + inputLength);

// Q NO 03: Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// ANS 03:
//var word = "Pakistani";

//var index = -1;

//for (var i = 0; i < word.length; i++) {
//    if (word[i] === 'n') {
//        index = i;
//        break;
//    }
//}

//console.log("The index of 'n' in 'Pakistani' is: " + index);

// Q NO 04: Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.


// ANS 04:
//var word = "Hello World";

//var lastIndex = -1;

//for (var i = word.length - 1; i >= 0; i--) {
//    if (word[i] === 'l') {
//        lastIndex = i;
//        break;
//    }
//}

//console.log("The last index of 'l' in 'Hello World' is: " + lastIndex);

// Q NO 05: Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// ANS 05: 
//var word = "Pakistani";

//if (word.length >= 3) {
//    var character = word[2];

//    console.log("The character at the 3rd index in 'Pakistani' is: " + character);
//} else {
//    console.log("The word 'Pakistani' has less than 3 characters.");
//}


// Q NO 06: Repeat Q1 using string concat() method.


// ANS 06:
//var firstName = prompt("Enter your first name:");

//var lastName = prompt("Enter your last name:");

//var fullName = firstName.concat(" ", lastName);

//alert("Hello, " + fullName + "! Welcome to our website.");


// Q NO 07: Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// ANS 07:
//var originalWord = "Hyderabad";

//var replacedWord = originalWord.replace("Hyder", "Islam");

//document.write("Original Word: " + originalWord + "<br>");
//document.write("Replaced Word: " + replacedWord);


// Q NO 08: Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket and football together.”;

// ANS 08:
//var message = "Ali and Sami are best friends. They play cricket and football together.";

//var replacedMessage = message.split("and").join("&");

//document.write("Original Message: " + message + "<br>");
//document.write("Replaced Message: " + replacedMessage);

// Q NO 09: Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// ANS 09:
//var str = "472";

//var num = Number(str);

//document.write("String Value: " + str + "<br>");
//document.write("Number Value: " + num + "<br>");
//document.write("Type of String: " + typeof str + "<br>");
//document.write("Type of Number: " + typeof num);

// Q NO 10: Write a program that takes user input. Convert and show the input in capital letters.

// ANS 10:
//var userInput = prompt("Enter some text:");

//var capitalLetters = userInput.toUpperCase();

//document.write("Original Input: " + userInput + "<br>");
//document.write("Input in Capital Letters: " + capitalLetters);

// Q NO 11: Write a program that takes user input. Convert and show the input in title case.

// ANS 11:
//var userInput = prompt("Enter some text:");

//var words = userInput.split(' ');

//for (var i = 0; i < words.length; i++) {
//  words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
//}
//var titleCaseInput = words.join(' ');

//document.write("Original Input: " + userInput + "<br>");
//document.write("Input in Title Case: " + titleCaseInput);

// Q NO 12: Write a program that converts the variable num to string.
//var num = 35.36 ;
//Remove the dot to display “3536” display in your browser.

// ANS 12:
//var num = 35.36;

//var numAsString = num.toString().replace(".", "");

//document.write("Original Number: " + num + "<br>");
//document.write("Number as String without Dot: " + numAsString);

// Q NO 13: Write a program to take user input and store username in a variable. If the username contains any special symbol 
//among [@ . , !], prompt the user to enter a valid username. 
//For character codes of [@ .
//Note:
//ASCII code of ! is 33
//ASCII code of , is 44
//ASCII code of . is 46
//ASCII code of @ is 64

// ANS 13:
//var username = prompt("Enter a username:");

//if (username.indexOf('@') !== -1 || username.indexOf('.') !== -1 || username.indexOf('!') !== -1 || username.indexOf(',') !== -1) {
//    alert("Please enter a valid username without special symbols [@, ., !]");
//} else {
//    alert("Username is valid: " + username);
//}

// Q NO 14: You have an array
//A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an 
//array. After searching, prompt the user whether the given 
//item is found in the list or not.
//Note: Perform case insensitive search. Whether the user 
//enters cookie, Cookie, COOKIE or coOkIE, program 
//should inform about its availability. Example:


// ANS 14:
//var A = ["cake", "apple pie", "cookie", "chips", "patties"];

//var userInput = prompt("Search for an item:").toLowerCase();

//var found = false;

//for (var i = 0; i < A.length; i++) {
//    if (userInput === A[i].toLowerCase()) {
//        found = true;
//        break;
//}

//if (found) {
//    alert("Yes, '" + userInput + "' is available in the list.");
//} else {
//    alert("No, '" + userInput + "' is not found in the list.");
//}

// Q NO 15: Write a program to take password as an input from user. The password must qualify these requirements:
//a. It should contain alphabets and numbers
//b. It should not start with a number
//c. It must at least 6 characters long
//If the password does not meet above requirements,
//prompt the user to enter a valid password.
//For character codes of a-z, A-Z & 0-9, refer to ASCII
//table at the end of this document.

// ANS 15:
var password = prompt("Enter a password:");

var lowercaseCharCodeRange = [97, 122]; 
var uppercaseCharCodeRange = [65, 90];  
var numberCharCodeRange = [48, 57];     

if (
    password.length >= 6 &&                      
    isNaN(password[0]) &&                        
    /[a-zA-Z]/.test(password) &&                 
    /[0-9]/.test(password)                           
) {
    alert("Password is valid.");
} else {
    alert("Please enter a valid password that meets the specified requirements.");
}

// Q NO 16: Write a program to convert the following string to an array using string split method.
//var university = “University of Karachi”;
//Display the elements of array in your browser.

// ANS 16:
//var university = "University of Karachi";

//var universityArray = university.split(' ');

//document.write("String: " + university + "<br>");
//document.write("Array: [" + universityArray.join(', ') + "]");

// Q NO 17: Write a program to display the last character of a user input.


// ANS 17:
//var userInput = prompt("Enter a string:");

//if (userInput !== null && userInput !== "") {
//    var lastCharacter = userInput[userInput.length - 1];

//    alert("Last character of the input is: " + lastCharacter);
//} else {
//    alert("No input provided. Please enter a string.");
//}


// Q NO 18: You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string

// ANS 18:
//var inputString = "The quick brown fox jumps over the lazy dog";

//var lowerCaseString = inputString.toLowerCase();

//var wordToSearch = "the";

//var count = 0;

//var index = lowerCaseString.indexOf(wordToSearch);

//while (index !== -1) {
//    count++;
//    index = lowerCaseString.indexOf(wordToSearch, index + 1);
//}

//alert("Number of occurrences of '" + wordToSearch + "': " + count);

