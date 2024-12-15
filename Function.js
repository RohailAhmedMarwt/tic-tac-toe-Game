//Functions
// function myfunc(a) {
//     console.log(a);

// }
// myfunc(4);

//add two numbers
// function sum (a , b){
//    add = a + b
//     return add

// }
// console.log(sum(243 , 2332));

//Arrow function

// const add =(a,b)=>{
//     console.log(a * b);

// }
// add(4 ,7)

// function countVowels(string){
//     let count = 0;
//     for(const char of string) {
//        if(char === "a" ||
//           char === "e" ||
//           char === "i" ||
//           char === "o" ||
//           char === "u"
//        ){
//            count++;
//        }
//     }
//     return `Word: ${string}, Vowels count: ${count}`;
// }

// console.log(countVowels("Rohail")); // is se word aur vowels ka count dono show hoga

// const countVowels =(str)=>{
//     let count = 0;
//     for(const char of str)
//         if(char === "a"|| char === "e"|| char === "i"|| char === "o"|| char === "u"){
//             count ++;
//         }
//         return `your String is ${str}: The Vowels in the String is :${count}`
        
// }


//For Each Loop
// let array = [1 , 2 , 3 , 4 , 5 , 6]

// array.forEach(function printvalue(val){
//     console.log(val);

// })
//fro each by call back function
// let arr=["isalamabad" , "lahore" , "delhi"]

// arr.forEach((val)=>{
//     console.log(val);
    
// })
// Question
// let array = [2 , 3 , 4 , 5 , 6]
// array.forEach((number) => {
//     console.log(number*number);
    
// });

// Array  . filter
// let arr = [1, 2 ,3 ,4 ,5 ,6]
// const array = arr.filter((num)=>{
//     return num > 2
// })
// console.log(array);


// practice Question
// let marks =[45 , 65, 87 , 98 , 89 , 67 , 78]

// const topperarr =marks.filter((val)=>{
//     return val > 80
// })
// console.log(topperarr);


let n = prompt("Please enter the number :")

let arr =[];

for(let i = 1 ; i <= n ; i++){
    arr[i - 1] = i
}
console.log(arr);

const sum =arr.reduce((current , previous)=>{
    return current + previous
})
console.log("Sum of the numbers :",sum);

const prod =arr.reduce((current , previous)=>{
    return  current * previous
})
console.log("Product of the number :",prod);
