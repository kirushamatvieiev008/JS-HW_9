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

const y = prompt(`enter one sentance`);
let c = y.split(` `);
// console.log(c.length);
let w = [];


const findLongestWord = function(string) {
    for (let i = 0; i < string.length; i ++) {
        w.push(c[i].length);
        console.log(Math.max(...w));
        
        // console.log(w);
        
    }
    // console.log(w);
    
}

findLongestWord(c)

