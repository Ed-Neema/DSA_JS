let n1 = 7
let n2 = 12

function bitAND(n1, n2){
    return n1.toString() & n2.toString()
}
console.log(n1.toString())
console.log(bitAND(n1,n2))

console.log(35.75.toFixed(0))
console.log(220 / 16)
console.log(220 % 16)

function rgb(r, g, b) {
  // complete this function
  let hexValues = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let div = Math.trunc(r / 16);
  let firstVal = hexValues[div - 1];
  let div2 = r % 16;
  let secVal = hexValues[div2 - 1];
  let finalR = firstVal + secVal;

  let finalG = hexValues[Math.trunc(g / 16) - 1] + hexValues[(g % 16) - 1];
  let finalB = hexValues[Math.trunc(b / 16) - 1] + hexValues[(b % 16) - 1];
  return finalR + finalG + finalB;
}

console.log(rgb(220,20,60))