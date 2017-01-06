var assert = {
  isTrue: function(assertionToCheck, functionName) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy (ಠ_ಠ)");
    } else {
      return console.log(functionName  + " says (ﾉ◕ヮ◕)ﾉ")
    }
  }
};
