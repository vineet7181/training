let a = 5;
for (let i = 1; i <= a; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}
let b= 5;
for (let i = 1; i <= b; i++) {
    let str = "* ";
    let space  = '  ';
    console.log(space.repeat((b-i))+str.repeat(i));
}


///square
let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    if(i === 0 || i === n - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);