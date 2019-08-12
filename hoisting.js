console.clear();

// Scenario 1  => variable v is used before it is defined, still no error reported //
console.log(v); // prints Undefined
var v;

// Scenario 2 => variable v is defined first and then used //
var p;
console.log(p); //Undefined
p = 12;

//So for hoisting : the definition of v has literally hoisted up to global scope! >:D
