let sayHi = function() {
    console.log( "Hello" );
  };
console.log(sayHi()) //print the "Hello"
console.log(sayHi) //print the whole code of function

///Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object itself.

// All operations via copied references (like adding/removing properties) are performed on the same single object.

// To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy” (nested objects are copied by reference) or a “deep cloning” function structuredClone or use a custom cloning implementation, such as _.cloneDeep(obj).