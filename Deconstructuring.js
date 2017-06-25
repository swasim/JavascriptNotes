//deconstructure []
//deconstructure obj
//deconstructure object with a nested object

let a = ['cat', 'dog'];
let b = {
  name:'Bob'
};
let c = {
  name: {
    first: 'John'
  }
};

let[one, two] = a
console.log(one);

let {name} = b
console.log(name);


let {name:{first}} = c
console.log(first);
