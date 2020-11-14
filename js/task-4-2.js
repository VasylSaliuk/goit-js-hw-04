const isUniq = function (element, index, arr) {
    console.log(arguments);
    return  arr.indexOf(element) === index;
}

const isEven = (element) => element % 2 === 0;
const notUniq = (element, index, arr) => arr.indexOf(element) !== index;
function filterArray(array, cb) {
    // console.log(arguments);
  const numbers = [];
  for(let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
    // Write code under this line
    if (cb(element, index, array)) {
        numbers.push(element)
    };
  }
  return numbers;
}
const dir  = [1,2,3,4,1,2,5];
const andr  = [10,20,30,9,10,20,50];


console.log(filterArray(dir, notUniq));
// [1, 2, 3, 4, 5]

console.log(filterArray(andr, isUniq));

console.log(filterArray(dir, isEven));
// [2, 4, 2]
