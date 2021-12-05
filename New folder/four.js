
/**
 * Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11
 * Assignment-04
 */


   for( let s = 1; s <= 1000; s += 3 ){
        console.log(s);
        
        if( s % 11 == 0){
         
          break;
        }
        
   }