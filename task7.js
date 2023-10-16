const Array = [1, 2, null, 4, 5, 6, 7, 8, 9];
let oddElement = 0;
let evenElement = 0;
for (let i=0; i < Array.length; i++) {
  const element = Array [i];
    if (element % 2 === 0) {
        evenElement++;
        } else {
        oddElement++;
        }
}
console.log(`oddElement ${oddElement}`);
console.log(`evenElement ${evenElement}`);
