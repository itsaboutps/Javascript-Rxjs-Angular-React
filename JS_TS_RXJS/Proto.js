let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit._prot_ = animal; // (*)
  
  // we can find both properties in rabbit now:
  console.log( rabbit.eats ); // true (**)
  console.log( rabbit.jumps ); //