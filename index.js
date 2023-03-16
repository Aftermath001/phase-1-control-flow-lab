let distance = prompt("Please enter your distance", " ");
//function scuberGreetingForFeet(distance)
function scuberGreetingForFeet(distance) {
   
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
} else if (distance > 2500 && distance <= 5000) {
     return "No can do.";
  } else {
    // return "Invalid distance input.";
    return distance;
  }
}
console.log(scuberGreetingForFeet(distance));
let destination;

//function ternaryCheckCity(destination)
function ternaryCheckCity(destination) {
  return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

console.log(ternaryCheckCity(destination));
//function switchOnCharmFromTip(tipAmount)
function switchOnCharmFromTip(tipAmount) {
  switch (tipAmount) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}
console.log(ternaryCheckCity(tipAmount));