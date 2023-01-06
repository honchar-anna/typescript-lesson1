
   function declaration  (array:number[]) {
      let max = array[0];
        for (let funMaxElement of array) {
           if (funMaxElement > max) max = funMaxElement;
       }
       return max;
  };
   let funMaxReturn = declaration([23,3254,45345,22,33434]);
   console.log('завдання 3 максимальне число:  '+ funMaxReturn);


