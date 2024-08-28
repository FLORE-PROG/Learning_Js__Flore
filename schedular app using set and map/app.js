
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); 
  
  for (let amount of recipeMap.values()) {
   console.log(amount); 
  }
  
  for (let entry of recipeMap) { 
    console.log(entry); 
  }
  recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`); 
  })
  }
  let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };


set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log( set.size ); 

set.forEach(user => alert(user.name))
 set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});
