

function getSqrt(number:any):void{
   console.log('lox1');

   if(number >0){
      console.log(`Квадратний корінь з ${number} = ${ Math.sqrt(number)}`);
     
   }
   else if(number<0){
      console.log('Введіть додатнє число');
      
   }

   else {
      console.log('Будь ласка, введіть число!');
      
   }
   console.log('lox3');
   
}
getSqrt(-3);

