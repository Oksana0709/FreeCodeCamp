//The compareEquality function in the editor compares two values using the equality 
//operator. Modify the function so that it returns the string Equal only when the 
//values are strictly equal.

function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality("10", "10");