let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit =Object.getPrototypeOf(Object.create(animal)) ; // (*)
  
  // we can find both properties in rabbit now:
  console.log(  rabbit); // true (**)
  console.log( animal ); //