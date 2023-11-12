function hasProperties(str, obj) {
  return obj.hasOwnProperty(str);
}


const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

const str1 = 'firstName';

console.log(hasProperties(str1, person));
