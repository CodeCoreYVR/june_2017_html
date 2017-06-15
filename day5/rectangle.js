// password checker - forrest
var password = prompt("Enter a password, yo.")
if (password.length < 8){
  console.log("Your password is too short!!")
} else if (password.length > 12){
  console.log("Your password is too long!!")
} else {
  console.log("Your password is just right!")
}

// rectangle - forrest
let width = Math.random() * 10;
let height = Math.random() * 20;

var area = width * height;

console.log(area);


// fizzbuzz - marco

for (let i=1; i<=100;i++){
  if((i%3===0) && (i%5===0)){
    console.log("FIZZBUZZ");
  } else if (i%3 === 0){
    console.log("FIZZ");
  } else if (i%5 === 0){
    console.log("BUZZZZ");
  } else {
    console.log(i)
  }
}


let i=1;

while (i<=100){
  if((i%3===0) && (i%5===0)){
    console.log("FIZZBUZZ");
  } else if (i%3 === 0){
    console.log("FIZZ");
  } else if (i%5 === 0){
    console.log("BUZZZZ");
  } else {
    console.log(i)
  }

  i++;
}





// letter grades - rhoda

let num = Math.random()*100;
if (num>90) {
  console.log("Your grade is A+");
} else if (num>85) {
  console.log("Your grade is B");
} else if (num>72) {
  console.log("Your grade is C");
} else if (num>60) {
  console.log("Your grade is D");
} else if (num>50) {
  console.log("Your grade is E");
} else {
  console.log("Your grade is F");
}












//











//
