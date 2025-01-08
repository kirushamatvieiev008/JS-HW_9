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

const string = prompt(`enter your sentanse`);
const mstring = string.split(` `);
let mNums = []
for (let i = 0; i < mstring.length; i ++) {
  mNums.push(mstring[i].length);
  
}
console.log(Math.max(...mNums));