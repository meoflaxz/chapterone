let ninjas = ["shaun", "ryu", "chun-li"];
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ["shaun", "crystal", 30, 20];
console.log(random);

console.log(random.length);

let test = ninjas.join(".");
console.log(test);

let tes = ninjas.concat(["ken", "crystal"]);
console.log(tes);

//return length of new array
//alters original value
let set = ninjas.push("ken");
console.log(set);

//remove and return last element of array
let reg = ninjas.pop();
console.log(reg);
