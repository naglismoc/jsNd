console.log("========== 2 uzd ===========");

let nr1 = Math.round(Math.random() * 4);
let nr2 = Math.round(Math.random() * 4);

console.log(nr1);
console.log(nr2);


if (nr1 != 0 && nr2 != 0) {

    if (nr1 > nr2) {
        console.log(Math.round(nr1 / nr2 * 100) / 100);
    } else {
        console.log(Math.round(nr2 / nr1 * 100) / 100);
    }

} else {
    console.log("lievi skaiciai");
}

console.log("========== 3 uzd ===========");


let nr3 = Math.round(Math.random() * 25);// 10
let nr4 = Math.round(Math.random() * 25);// 15
let nr5 = Math.round(Math.random() * 25);// 17
//  17 >   15 ir  15 > 10    arba   10 < 15   ir 15 < 17
if ((nr3 > nr4 && nr4 > nr5) || (nr3 < nr4 && nr4 < nr5)) {
    console.log(nr4);
}

if ((nr4 > nr3 && nr3 > nr5) || (nr4 < nr3 && nr3 < nr5)) {
    console.log(nr3);
}

if ((nr3 > nr5 && nr5 > nr4) || (nr3 < nr5 && nr5 < nr4)) {
    console.log(nr5);
}


console.log("========== 4 uzd ===========");

let nr6 = 1 + Math.round(Math.random() * 9);// 10  
let nr7 = 1 + Math.round(Math.random() * 9);// 10
let nr8 = 1 + Math.round(Math.random() * 9);// 10

if ((nr6 + nr7 > nr8) && (nr6 + nr8 > nr7) && (nr7 + nr8 > nr6)) {
console.log("trikampis galimas");
}else{
    console.log("aint gonna happen");
}

console.log("========== 5 uzd ===========");

let nr9 = Math.round(Math.random() * 2);// 0
let nr10 = Math.round(Math.random() * 2);// 2
let nr11 = Math.round(Math.random() * 2);// 0
let nr12 = Math.round(Math.random() * 2);// 1

let count1 = 0; // skaiciuos nulius
let count2 = 0; // skaiciuos vienetus
let count3 = 0; // skaiciuos dvejetus

if(nr9 == 0){
    count1++;
}

if(nr10 == 0){
    count1++;
}

if(nr11 == 0){
    count1++;
}

if(nr12 == 0){
    count1++;
}



if(nr9 == 1){
    count2++;
}

if(nr10 == 1){
    count2++;
}

if(nr11 == 1){
    count2++;
}

if(nr12 == 1){
    count2++;
}



if(nr9 == 2){
    count3++;
}

if(nr10 == 2){
    count3++;
}

if(nr11 == 2){
    count3++;
}

if(nr12 == 2){
    count3++;
}

console.log(nr9,nr10,nr11,nr12);
console.log("nulių rado " + count1 + ",vienetų rado " + count2 + ",dvejetų rado " +count3);

    // count1 = 0;

   //======================
    // count1 = count1 + 1;
    // count1 += 1;  //visi sitie uzrasymai reiskia ta pati.
    // count1++;
    //======================

// && - ir, kai abi reiksmes turi buti true
// || - arba, kai reikia, kad BENT VIENA reiksme butu true


// 7 == 7

// 7 > 6

// 7 >= 7

// if(7 == 7 || 7 > 7)


// nr1 > nr2 daugiau
// nr1 < nr2 maziau
// nr1 == nr2 lygu
// nr1 === nr2 lygu
// console.log( 7 == "7");
// console.log( 7 === "7");
// nr1 >= nr2 daugiau lygu
// nr1 <= nr2 maziau lygu
// nr1 != nr2  nelygu



