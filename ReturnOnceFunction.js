
//create a function that can only be called once

let outside = ['hello', 'bye'];
let count = 0;

const hello = function(){
  var temp = outside[count];
  count++,
  return temp; //temp =1 after first return
}

function once (func){
  let isCalled = false;
  let temp;
  return function(){
    
    if(isCalled === false){
      temp = func()
      isCalled = true;
    }   
    return temp;    
  };
}

var helloThrottle = once(hello);
var result1 = helloThrottle() // 'hello'
var result2 = helloThrottle() // 'hello'
