
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются   
}
let arrayRandom = [];

for (i=0; i < 10; i++){
   arrayRandom.push (getRandomIntInclusive(0, 100));
   if (arrayRandom [i] === 0 ) { 
       arrayRandom [i] = 'zero';
   } else if (arrayRandom [i] % 10 === 0){
       arrayRandom [i] = String (arrayRandom [i]) [0] + 'zero';
   }

     
}
console.log(arrayRandom);




