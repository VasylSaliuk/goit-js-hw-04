// function getMinMax(arr){
//     const result = [];
//     arr.sort(function(a,b){return a - b})
//     result.push(arr[0]);
//     result.push(arr[arr.length-1]);
//     return result;
//   };

//     console.log(getMinMax([1]),[1,1]);
//     console.log(getMinMax([1,2]),[1,2]);
//     console.log(getMinMax([2,1]),[1,2]);


function riders(stations) {
    let totalRiders = 1;
    let totalStation = 0;
    const maxStation = 100;
    for (let i = 0; i < stations.length; i += 1) {
        totalStation += stations[i];
        if (totalStation + stations[i + 1] > maxStation) {
            totalRiders += 1;
            totalStation = 0;
        }
    }

    return totalRiders;
  }

 
      console.log(riders([18, 15]), 1);
      console.log(riders([43, 23, 40, 13]), 2);
      console.log(riders([33, 8, 16, 47, 30, 30, 46]), 3);
      console.log(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]), 4);