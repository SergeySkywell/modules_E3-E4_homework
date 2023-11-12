  function printNumbersFromTo(a, b) {
    let currentNumber = a;
  
    const intervalId = setInterval(() => {
      console.log(currentNumber);
      if (currentNumber === b) {
        clearInterval(intervalId);
      }
      currentNumber++;
    }, 1000);
  }
  
  printNumbersFromTo(5, 15);