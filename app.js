let counter = 0;

function callMe() {
    counter += 1;
    console.log(counter);
    try {
        callMe();
    } catch (error){
        console.log(`an error has occurred ${counter}`)
    }
}
callMe()

// Part 2

let testArray = [1,2,3,[[5,6,2,4],[6,8]]]

result = [1,2,3,5,6,2,4,6,8,5,6,2,4,6,8]


function flattenArray (array){
    result = []

    for (let i =0; i < array.length; i++){
        if(Array.isArray(array[i])){
           result = result.concat(flattenArray(array[i]))
        } else{
            result.push(array[i])
        }
    }

    return result

}


console.log(flattenArray(testArray))

const counter = document.querySelector(".counter");
const result = document.querySelector(".result");

let number = counter.innerText;

console.log(number);

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function printPrimeNumbersToNum(num) {
        for (let i = 2; i <= num; i++) {
            if (isPrime(i)) {
        
                let item = document.createElement("li");
                item.innerText = i;
                result.appendChild(item);
              
            }
          } 

setTimeout(() =>{
alert("calculations complete")
},10)
}

printPrimeNumbersToNum(10000);
