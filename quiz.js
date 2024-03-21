//const prompt = require('prompt-sync')();

//Program 1: Temperature Converter

function fahrenheitToCelsius(fahrenheit) {
    // Convert Fahrenheit to Celsius with formula: (F - 32) * 5/9
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }
  
  // Example
  var fahrenheitTemp = 67; // Example fahrenheit temp
  var celsiusTemp = fahrenheitToCelsius(fahrenheitTemp);
  console.log(fahrenheitTemp + " degrees Fahrenheit is equal to " + celsiusTemp + " degrees Celsius.");
  
//Program 2: Grade Calculator

function calculateGrade(percentage) {
    if (percentage >= 90) {
        return 'A';
    } else if (percentage >= 80 && percentage < 90) {
        return 'B';
    } else if (percentage >= 70 && percentage < 80) {
        return 'C';
    } else if (percentage >= 60 && percentage < 70) {
        return 'D';
    } else {
        return 'F';
    }
}
//Program 3: Leap Year Checker

//Program 4: Largest Number Finder
