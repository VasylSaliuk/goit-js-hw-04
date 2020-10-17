function hero(bullets, dragons){
    return dragons * 2 <= bullets;
    }
    console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(4, 5));
console.log(hero(100, 40));
console.log(hero(1500, 751));
console.log(hero(0, 1));

// function sakuraFall(v) {
    
//   }
//   console.log(sakuraFall(5), 80);
//   console.log(sakuraFall(10), 40);
//   console.log(sakuraFall(-1), 0);

function positiveSum(arr) {
  let sumPositive = 0;
  for (let number of arr) {
    if (number > 0) {
      sumPositive += number;
    }
  }
  return sumPositive;
}
console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([]));
console.log(positiveSum([-1,-2,-3,-4,-5]));
console.log(positiveSum([-1,2,3,4,-5]));

