//The Temporal Dead Zone (TDZ) is a behavior in JavaScript
// that occurs when you try to access a variable declared with let or const before it has been initialized.
//In simple terms, a variable is in the TDZ from the start of its scope until the line where it is initialized.
//  Accessing the variable in this zone results in a ReferenceError.
console.log(a);
var a = 10;