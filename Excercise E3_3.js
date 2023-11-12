  function firstFunction (numberA) {
    return function(numberB) {
      return numberA + numberB
    }
  }
  
  const addWithFirstNumber = firstFunction(5);
  const result = addWithFirstNumber(2);
  
  console.log(result);