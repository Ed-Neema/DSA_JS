
function fibonacci(num){
    var initialArray = [0,1]
    if(num == 0 || num < 0){
        console.log("invalid value");
        return
    }
    while(initialArray.length < num){
        var nextNum = initialArray[initialArray.length-1] + initialArray[initialArray.length-2];
        initialArray.push(nextNum);
    }
    return initialArray;
}

console.log(fibonacci(9))
console.log(fibonacci(0))
console.log(fibonacci(-8))





