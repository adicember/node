// console.log("hello World!");

// function sum(a, b) {
//   return a + b;
// }

// function printNumbers() {
//     function printNumbers() {
//         for (let i = 1; i <= 5; i++) {
//           console.log(i);
//         }
//       }
      
//       // Call the function to execute the loop
//       printNumbers();
//     console.log(i);
//   }
// }
// printNumbers();
// sum(5, 5);



function printPyramid() {
    for (let i = 0; i < 5; i++) {
      let row = "";
  
      for (let j = 0; j <= i; j++) {
        row += "* ";
      }
  
      console.log(row);
    }
  }
  
  // Call the function to print a pyramid
  printPyramid();
  