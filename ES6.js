// ************
// 1. let/const
// ************
var x = 1;
let y = 2;
const z = 3;
if (true) { // Block Scoped
  console.log(x); // 1
  console.log(y); // Reference Error!!
  var x = 101;
  let y = 102;
}
z = 103; // Type Error!!
console.log(x); // 101
console.log(y); // 2

// *****************
// 2. arrow function
// *****************
let multiply2 = function(x, y) {return x * y;}; // ES5 version
let multiply2 = (x, y) => { return x * y }; // ES6 version
let multiply1 = x => { return x * x }; // no parenthesis if one parameter exists
let multiply0 = () => {return 1;}; // required parenthesis if no parameter exists
const items = [1, 2, 3, 4];
let byTwo = items.map(i => i * 2); // [2, 4, 6, 8];

// ********
// 3. class
// ********
class Polygon {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
let p = new Polygon(100);
console.log(width); // 100
console.log(height); // undefined

// **********
// 4. get/set
// **********
let obj = {
    value: 1,
    get load () {
        return this.value;
    },
    set save (value) {
        this.value = value;
    }
};
obj.save = 2;
console.log(obj.load); // 2

// **********
// 5. promise
// **********
var myImage = document.querySelector('img');
fetch('flowers.jpg').then(function(response) {
  return response.blob();
}).then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});

// **************
// 6. async/await
// **************
async function logInOrder(urls) {
  // fetch all the URLs in parallel
  const textPromises = urls.map(async url => {
    const response = await fetch(url);
    return response.text();
  });

  // log them in sequence
  for (const textPromise of textPromises) {
    console.log(await textPromise);
  }
}
// EOF