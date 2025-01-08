// const x = [`mango`, `ajax`, `bird`, `Andrew`];
// // console.log(x.length);





// const logItems = function(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`element num: ${i + 1}, element value: ${array[i]}`);
        
//     }
    
    
//     return
// };

// logItems(x);

// task 3

// const string = prompt(`enter your sentanse`);
// const mstring = string.split(` `);
// let mNums = []
// for (let i = 0; i < mstring.length; i ++) {
//   mNums.push(mstring[i].length);
  
// }

// for (let i = 0; i < mNums.length; i ++) {
//   if (Math.max(...mNums) ===  mstring[i].length) {
//     console.log(mstring[i]);
//     break
    
//   }
// }

// task 4

// so this story will be about a boy who like playing on the playground whenever it happend he lost his mind and then appeared in wild forest i think it was close to russia or othe nearest counties but lets think about boy, it was wild cold forest but the first that boy did was that he fell in love in this beuatifulle

// let message = prompt(`enter your message`);
// let arrayMessage = message.split(``);



// const formatString = function (string) {
//   if (string.length > 40) {
//     deletedTxt = string.splice(41);
//     console.log(`${string.join(``)}...`);
    
//   } else {
//     console.log(string);
    
//   };
// };
// formatString(arrayMessage);

// task 5

// let messageWithSpam = prompt(`enter your message`);
// let arrayMessageSpam = messageWithSpam.split(` `);


// const checkForSpam = function (message) {
//   for (let i = 0; i < arrayMessageSpam.length; i ++) {
//     if (message.includes(`spam`) || message.includes(`sale`)) {
//       console.log(true);
//       break

      
//     } else {
//       console.log(false);
      
//     };
//   };
// };

// checkForSpam(arrayMessageSpam);

// task 6
// console.log(numbers);

  


let numbers = [];
total = 0;


for (let i = 0; i < 1000000; i ++) {
  let num = prompt(`enter num, when you end the lust num have to be 0`);
  numbers.push(Number(num));
  
  if (numbers.includes(0)) {
    
    break
  }
}
console.log(numbers);
for (i = 0; i < numbers.length; i ++) {
  total += numbers[i];
  
}
console.log(total);




// let x = ``;
// console.log(Number(x));


// for (let i = true; i = true;) {
//   let num = prompt(`enter num`);
//   let numbers = [];
//   numbers.push(num);
//   total = 0;
//   for (i = 0; i < numbers.length; i ++) {
//     let sum = total + numbers[i];
//     console.log(sum);
    
//   }
