function threeLargestNumbers(array){
    let temp2 = [];
    let temp3;
    let max;
    
      for(let i = 0;i < 3;i++){
      max = Math.max(...array);
        temp2.push(max);
        array.splice(array.indexOf(max), 1);
      }
      temp3 = temp2[0];
      temp2[0] = temp2[2];
      temp2[2] = temp3;
     return temp2;
    }
    exports.threeLargestNumbers =  threeLargestNumbers;