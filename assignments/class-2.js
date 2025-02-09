/*let a = 10;
let b = 15;
//--------------
let sum = a + b;
console.log(sum);                     
//--------------
let diff = a - b;
console.log(diff)
//--------------
let prod = a * b;
console.log(prod);
//--------------
let div = a / b ;
console.log(div);
//---------------
let mod = a % b ; 
console.log(mod);*/
let budget = Number(prompt("Enter your budget"));
console.log("Budget:", budget);
let day = prompt("Enter your day");
console.log("Day:", day);
if (day === "Monday" && budget <= 500) {
 console.log("You choose Deal 1");               
}
else if (day === "Monday" && budget > 500 && budget<1000) {
    console.log("You choose Deal 2");               
   }
   else if (day === "Monday" && budget >= 1001) {
    console.log("You choose Deal 1 + Deal 2");               
   }
   else if (day === "Friday" && budget==1000) {
    console.log("You choose Buffet");               
   }
   else if (day === "Sunday" && budget>=500) {
    let desseert = prompt("Do you Want Dessert ? (Yes/No)");
   if (desseert=="Yes"){
       console.log("You choose Deal + Dessert");
   }
   else{
       console.log("You choose Deal only")
   }
}