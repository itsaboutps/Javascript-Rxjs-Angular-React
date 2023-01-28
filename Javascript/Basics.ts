/**
 * So to say, all odd integers greater than (253-1) can’t be stored at all in the “number” type.

For most purposes ±(253-1) range is quite enough, but sometimes we need the entire range of really big integers, e.g. for cryptography or microsecond-precision timestamps.

BigInt type was recently added to the language to represent integers of arbitrary length.

A BigInt value is created by appending n to the end of an integer:

    // the "n" at the end means it's a BigInt
    const bigInt = 1234567890123456789012345678901234567890n;
 */

    /**
     * !let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
The expression inside ${…} is evaluated and the result becomes a part of the string. We can put anything in there: a variable like name or an arithmetical expression like 1 + 2 or something more complex.

Please note that this can only be done in backticks. Other quotes don’t have this embedding functionality!

alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)
     */



/**
The important difference between them is that:
|| returns the first truthy value.
?? returns the first defined value.
In other words, || doesn’t distinguish between false, 0, an empty string "" and 
null/undefined. They are all the same – falsy values. If any of these is the first argument
of ||, then we’ll get the second argument as the result.

The important difference between them is that:

|| returns the first truthy value.
?? returns the first defined value.
In other words, || doesn’t distinguish between 
false, 0, an empty string "" and null/undefined. 
They are all the same – falsy values. 
If any of these is the first argument of ||, 
then we’ll get the second argument as the result.
*/