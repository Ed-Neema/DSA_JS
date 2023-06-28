//toFixed()-method formats a number using fixed-point notation.
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456));
// Expected output: "123.46"

console.log(financial(0.004));
// Expected output: "0.00"

console.log(financial('1.23e+5'));
// Expected output: "123000.00"



const number = 0.3456
let numberConv = number.toFixed(3);
console.log(numberConv.replace(/^0+/, ""));
console.log(typeof number.toFixed(3));


function battingAvg(arr) {
  let totalHits = 0;
  let totalBats = 0;
  arr.forEach((item) => {
    totalHits = totalHits + item[0];
    totalBats = totalBats + item[1];
  });
  let BA = (totalHits / totalBats).toFixed(3).replace(/^0+/, "");
  return BA;
}