var myArray = [];

for (var i = 1; i < 11; i++) {
    myArray.push(i);
    
}
console.log(myArray);

var twoArray = [];

// Only change code below this line
var i = 10;
while(i > 0) {
  twoArray.push(i);
  i--;
  
}
console.log(twoArray);

var threeArray = [];

for (var i = 11; i < 22; i += 2) {
    threeArray.push(i);
    
}
console.log(threeArray);

var fourArray = [];

for (var i = 15; i > 0; i = i-2) {
    fourArray.push(i);
    
}
console.log(fourArray)


document.write("Look in the console")