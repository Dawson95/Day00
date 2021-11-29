function twoNumberSum(array, targetSum){
    for(let i = 0; i < array.length ; i++){
        for(let y = 1; y < array.length;y++){
            temp = array[i] + array[y];
            if(temp == targetSum){
                return [array[i],array[y]];
            }
        }
  
  }
  return [];
  }
  
//   console.log(twoNumberSum([1,2,10,8,7,4,9,47],14));
  

exports.twoNumberSum = twoNumberSum;



