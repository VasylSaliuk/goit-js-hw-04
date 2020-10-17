const findBestEmployee = function (employees) {
let bestEmployee = '';
let taskQuantity = 0;
let array = Object.values(employees);
 taskQuantity = Math.max(...array);

// console.log(Object.values(employees));
for (let employee in employees) {
    if (employees[employee] === taskQuantity) {
        bestEmployee = employee;
    }
}
    return bestEmployee;
};
    // альтернативне рішення
    // 1
//     let bestEmployee = "";
//   let value = 0;

//   const entries = Object.entries(employees);
//   for (const entry of entries) {
//     // const key = [0];
//     // const valueEntry = [1];
//     // console.log(entry);

//     if (entry[1] > value) {
//       value = entry[1];
//       bestEmployee = entry[0];
//     }
//   }

//   return bestEmployee;

// 2
// const findBestEmployee = function (employees) {
//     let bestStats = 0;
//     let bestEmployeeName = "";
//     for (const key in employees) {
//       if (bestStats < employees[key]) {
//         bestStats = employees[key];
//         bestEmployeeName = key;
//       }
//     }
//     return bestEmployeeName;

  
  // Объекты и ожидаемый результат
  const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }; 
  console.log(findBestEmployee(developers)); 
  // 'lorence'
  
  const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
  }; 
  console.log(findBestEmployee(supports)); 
  // 'mango'
  
  const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }
  console.log(findBestEmployee(sellers)); 
  // 'lux'  