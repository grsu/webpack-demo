const getData = require('./getData');

console.log('Hello World, s13');

const dataPromise = getData();

dataPromise.then(function (data) {
  console.log('then', data)
})

console.log('end');
