const lostArr = [3, 4, false, 26, null];
console.log(lostArr);
console.log(lostArr.length);
let sum=0;
for (let i = 0; i < lostArr.length; i++) {
  sum += lostArr[i];
}
console.log(sum);
for (let i = 0; i < lostArr.length; i++) {
  console.log(lostArr[i]);
}
