// Write a function that returns each string in this array in all uppercase letters.
let l = ["a","b","c","d","e"];
function toUpperCase(l) {
for(let i=0; i<l.length; i++) {
console.log(l[i].toUpperCase());
}
}
toUpperCase(l);
// Write a function that accepts an array of objects and logs the color attribute of each.
let list = [
  {width: 20, color: 'red'},
  {width: 50, color: 'blue'},
  {width: 10, color: 'purple'}
];
function getColors(list){
for (let i=0; i < list.length; i++) {
    console.log(list[i].color);
}
}
