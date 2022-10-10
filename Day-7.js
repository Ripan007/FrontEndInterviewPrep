#Map

const num = [1, 2, 3, 4, 5]; 
const ans = num.map((arg) => arg * 2); 
console.log(ans); 

#square

 const num = [2, 4, 8];
  const ans = num.map((arg) => arg * arg); 
  console.log(ans);

#filter

const num = [1, 2, 3, 4, 5];
 const filterEven = num.filter((arg) => { return arg % 2 == 0; }); 
 console.log(filterEven); 
 const filterOdd = num.filter((arg) => { return arg % 2 !== 0; }); 
 console.log(filterOdd); 
