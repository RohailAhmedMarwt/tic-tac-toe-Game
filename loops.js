//For Loops

// for(count = 1 ; count <= 5 ; count ++){
//     console.log("Marwat Hub");
// }
// console.log("loop has ended");

//Calculate the sum 41 to 5;
// let sum = 0
// for(let i = 1 ; i<=5 ; i++) {
//     sum = sum + i;
// }
// console.log(sum);


//while loop

// let i =1;
// while(i <= 10){
//     console.log("i =",i);
//     i++;
// }

//do-while Loop

// let i =1;
// do{
//     console.log('i =',i);
//     i++;
// }while(i <= 5);

//for of loop
//  let str = "RohailMarwat";

//  for(let i of str){
//     console.log('i =',i);
//  }

//  let str = "HabibicometoDubai";
//  let size = 0;

//  for(let val of str){
//     console.log(val);
//     size++;
//  }
//  console.log("size of the letters is",size);
 
//for in loop

// let student = {
//     name:'Rohail Ahmed',
//     class:'1st year',
//     rollNumber :302459,
//     college:'GPGC'
// }
// for(let key in student){
//     console.log("key =",key ,"value", student[key] );
    
// }


//test Question

// for(i = 0 ; i <= 100 ; i++){
//     if(i % 2 === 0)
//     console.log("i =",i);   
// }


//take a user name in prompt and give a length also

let name = prompt("Please enter you FullName without spaces");
name = "@" + name + name.length;


console.log(name);
 