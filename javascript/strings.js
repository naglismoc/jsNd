

let hours = 16;
let minutes = 23;
let seconds = 22;

console.log(hours + ":" + minutes + ":" + seconds);

minutes =  "0" + minutes;
console.log(minutes);
// 16:04:22

let rndTxt = "labas as krabas";

console.log(rndTxt);
console.log(rndTxt.charAt(1));
console.log(rndTxt.includes("as"));
console.log(rndTxt.toUpperCase());
console.log(rndTxt.length);
console.log(rndTxt.substring(4,15));
console.log(rndTxt.substring(4,rndTxt.length-2));

console.log(minutes.substring(minutes.length-2));
console.log("Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope");