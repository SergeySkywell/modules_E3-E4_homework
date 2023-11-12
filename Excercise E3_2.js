  function primeNumberDefinition(number) {
    if (number > 1000) {
      console.log('Введены неверные данные');
      return;
    }
    if (number == 1 || number == 0) {
      console.log('Число не простое');
      return;
    }
    for (let i = 2; i < number - 1; i++) {
      if (number % i === 0) {
        console.log('Число не простое');
        return;
      }
    }
    console.log('Число простое');
  }
  
  primeNumberDefinition(1)