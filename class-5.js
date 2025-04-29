// // // let liberary = [
// // // {
// // //     title : `Book 1`,
// // //     author : `Author A`,
// // //     yearPublished: 2021,
// // // },
// // // {
// // //     title : `Book 2`,
// // //     author : `Author B`,
// // //     yearPublished: 2022,
// // // },
// // // {
// // //     title : `Book 3`,
// // //     author : `Author C`,
// // //     yearPublished: 2023,
// // // }
// // // ];
// // // console.log(liberary);

// // // let newBook = {
// // //         title : `System Design`,
// // //         author : `Author N`,
// // //         yearPublished: 2024,   
// // // }
// // // liberary.push(newBook);

// // // let foundBook = liberary.find(book => book.title ===`System Design`);
// // // console.log(`New book added:`,foundBook);

// // // liberary = liberary.filter(book => book.title !==`Book 2`);
// // // console.log(`After Removing Book 2:`, liberary);

// // // let bookToUpdate = liberary.find(book => book.title===`Book 1`);
// // // if (bookToUpdate) {
// // //     bookToUpdate.yearPublished = 2023;
// // // }
// // // console.log(`After Updating year of Book One:`, liberary);
// // // for (let i =20; i>=0; i++) {
// // // console.log(i)    
// // // }
// // const n = 20;
// //  let sum = 0;
// //  for (let i = 1; i <= n;i++) {
// //      console.log(`${sum} + ${i} =`,sum = sum + i);

// //     // console.log(sum);
// //  }

// // for (let i = 1; i < 40; i++) {
// //     if (!i % 5 == 0) {
// //            continue;
// //     }
// //     if (i % 2 == 0) {
// //         console.log(i)
// //     } 
// // }
// //const start = 1;
// //const end = 40;

// // for (let i = 1; i <= 40; i++) {
// //     if(i % 5 == 0) {
// //         continue;
// //     }
// //     if (i % 2 == 0) {
// //         console.log("Even Number Found =", i);
// //     }
// // }
// // for (let i = 0; i <= 100; i++) {
// //     if (i === 10 || i === 20 || i === 30 || i === 40 || i === 60 || i === 70|| i === 80 || i === 90 ) {
// //         console.log(`checkpoint! ${i}`)
// //     }
// //     else if (i === 50) {
// //         console.log("Half way there!")
// //     }else if (i === 100) {
// //         console.log("you made it")
// //     }
// // }
// // console.log("All, done")
// // let checkpoints = [10, 20, 30, 40, 60, 70, 80, 90];
// // for (let i = 0; i <= 100; i++) {
// //     if (checkpoints.includes(i)) {
// //         console.log(`checkpoint! ${i}`)
// //     }
// //     else if (i === 50) {
// //         console.log("Half way there!")
// //     }else if (i === 100) {
// //         console.log("you made it")
// //     }
// // }
// // console.log("All, done")
// // let n = 10;
// // let mul = 0;
// // for (let i = 0; i <=n; i++) {
// //     mul = 4 * i
// //     console.log(`4 * ${i} = ${mul}`);
// // }
// // let arr = ['a','b','c','d','e','f'];
// // let narr = arr.slice(1,4);
// // console.log(narr)
// // let arr = ['apple','banana','cherry','mango','peach']
// // for (let i = 0; i < arr.length; i++) {
// //     const element = arr[i];
// //     console.log(arr[i]) 
// // }
// // const arr = ['22','47','13','54','66','88']
// // let max = [0]
// // for (let i = 1; i < arr.length; i++) {
// //     if (arr[i] > max) {
// //        max = arr[i]
// //     }
// // }
// // console.log(max);
// // const arr = ['22','47','13','54','66','88']
// // console.log(parseInt(arr[0]) + parseInt(arr[1]) +parseInt (arr[2]))

// // const arr = ['22','22','54','88','47','13','54','66','88']
// // let unique = []
// // for (let i = 0; i < arr.length; i++) {
// //     if (!unique.includes(arr[i])) {
// //         unique.push(arr[i])
// //     }
// // }
// // console.log(unique)

// // let obj = {
// //     name : "ali",
// //     zipCode : 200,
// //     city : "karachi",
// //     address : "kjciech"
// // }
// // let full = `${obj.city}, ${obj.zipCode}, ${obj.address}`
// // console.log(full)
// // let obj = {
// //     name : "ali",
// //     age : 20,
// //     subject : "karachi",
// //     isEnrolled : true
// // }
// // console.log(obj.name, obj.subject, obj.age, obj.isEnrolled)
// // console.log(obj.isEnrolled)
// // obj.grade = "A";
// // obj.isEnrolled = false;
// // console.log(obj)
// // let liberary = [
// //     {
// //         title: "namaz",
// //         author: "ali",
// //         yearPublished: 2020
// //     },
// //     {
// //         title: "deen",
// //         author: "ahmed",
// //         yearPublished: 2021
// //     },
// //     {
// //         title: "sunnah",
// //         author: "hamid",
// //         yearPublished: 2022
// //     }
// // ]
// // // console.log(liberary)
// // let ni = {
// //     title: "hadith",
// //     author: "hamza",
// //     yearPublished: 2023
// // }
// // liberary.push(ni);
// //  console.log(liberary)
// // for (let i = 0; i < liberary.length; i++) {
// //     if (liberary[i].title === "hadith") {
// //         liberary.splice(i ,1)
// //     } 

// // }
// // console.log(liberary)
// // for (let i = 0; i < liberary.length; i++) {
// //     if (liberary[i].title === "sunnah") {
// //         liberary[i  ].yearPublished = 2024
// //     } 

// // }
// // console.log(liberary)

//    todo list


// let todos = [];
// let operation;
// do {
//     operation = +prompt(`Select your desired operation
//         1. list
//         2. add
//         3. delete
//         4. quit`);

//     if (operation < 1 || operation > 4) {
//         alert("Not a valid selection of operation");
//         continue;
//     }

//     if (operation === 1) {
//         console.log(`List todos start:`);
//         for (let index = 0; index < todos.length; index++) {
//             const element = todos[index];
//             console.log(`Todo[${index+1}]: ${element}`);            
//         }
//         console.log(`List todos end`);
//     } else if (operation === 2) {
//         let input; 
//         do {
//             input = prompt("Enter your todo:");
//             if (input.trim() === "") {
//                 alert("Invalid input");
//                 continue;
//             } else {
//                 todos.push(input);
//                 break;
//             }
//         } while (true)
//     } else if (operation === 3) {
//         if (todos.length) {
//             let position;
//             do {
//                 position = +prompt("Enter your todo position:");
//                 if (position < 1 || position > todos.length) {
//                     alert("Invalid position");
//                     continue;              
//                 } else {
//                     todos.splice(position-1, 1);
//                     break;
//                 }
//             } while (true);
//         } else {
//             alert("Your list is empty");
//         }
//     }

// } while (operation != 4);


// todo list



// let todos = [];
// let operation ;
// do {
//  operation = +prompt(`Select your desired operation:
//  1. list
//  2. add
//  3. delete
//  4. quit`)
// if (operation < 1 || operation > 4) {
//     alert("invalid operation")
// }
// if (operation === 1) {
//     todos.length
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];

//     }
// } else {

// }


// } while (opertion !== 4);
// let str = "java script";
// let newStr = str.split('').reverse().join('')
// console.log(newStr)
// let str = "new arry"
// let newStr = str.indexOf('arry')
// console.log(newStr)


//masked email


// let email = prompt('Enter email')
// let masked = [email[0]]
// let indexOfmail = email.indexOf('@')
// if (indexOfmail > 2){
//     for (let i = 1; i < indexOfmail -1 ; i++) {
//         masked.push("*")   
//     }
//     masked.push(email.slice(indexOfmail - 1, email.length))
//     alert(`masked email : ${masked.join("")}`)
// }
// else  {
//    alert (`email ${email}`)
//}
// let i = 1;
// while (i <= 10) {
//     console.log("new arrival");
//     i++;
// }

//discount calculator

// let price = +prompt("enter price");
// let discountedPercentage = +prompt("enter percentage");
// function discountCalculator(price, discountedPercentage) {
//     let discountedPrice = price * discountedPercentage / 100;
//     let finalPrice = price - discountedPrice;
//     console.log("price: ", price, "Discounted Price: ", finalPrice);
//     return discountedPrice;
// }
// discountCalculator(price, discountedPercentage);

//vowel counter 

// let check = prompt('enter text');
// let vowel = ['a','e','i','o','u','A','E','I','O','U'];
// let count = 0;
// function checkVowel() {
//     for(let chr of check) {
//         if (vowel.includes(chr)) {
//             count++;
//         }
//     }
//     console.log(count);
// }
// checkVowel()

//check number greater than 90

// let arr = [32, 98, 65, 93]
// let newArr = arr.filter((val)=>{
// return val > 90
// });
// console.log(newArr)

//reverse integer code

// let num = +prompt("enter number")
// const reverseIntteger = (num) => {
// let revInt =parseInt(Math.abs(num).toString().split('').reverse().join(''))
// return (revInt);
// }
// console.log(reverseIntteger(num))

//to print integer b/w min and max

// let min = +prompt("enter min");
// let max = +prompt("enter max");
// let getRamdomInteger = (max , min) => {
//    return Math.floor( Math.random() * ( max - min + 1 )) + min;
// } 
// console.log(getRamdomInteger(max , min))



// function encodeDecodeMessage(message) {
//     const key = "GA-DE-RY-PO-LU-KI";
//     const keyArray =key.split('-')
//     const keyObject = {};
//   console.log(keyArray);
//    for (let pair of keyArray) {
//        keyObject[pair[0].toLowerCase()] = pair [1].toLowerCase() 
//        keyObject[pair[1].toLowerCase()] = pair [0].toLowerCase() 
//         console.log(keyObject)
//    } 
//    return ;
// }
// encodeDecodeMessage()