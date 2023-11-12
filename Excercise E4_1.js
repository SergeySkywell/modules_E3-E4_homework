function showProperties(obj) {
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
    console.log(property, ':', obj[property]);
    }
  }
}


const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

showProperties(person);