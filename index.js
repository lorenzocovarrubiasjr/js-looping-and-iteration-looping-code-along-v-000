
function printBadges(arg) {
  for (i = 0, i < arg.length, i++){
    console.log(`Welcome ${arg[i]}! You are employee #${i}.`);
  }
  return arg;
};


 function tailsNeverFails() {
   i = 0;
   while (Math.random() >= 0.5){
     i++
   } return `You got ${i} tails in a row!`
 }
