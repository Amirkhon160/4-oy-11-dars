// 1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini console.logda qo'shib chiqaring chiqaring


// 2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring 
// bering. Yani bu hozir string typeda siz number tyga o'zgartiring


// 3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering


// 4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zning
//  o'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin


// 5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi 
// so'zlar ichidan uzunligi 5 va undan kattalarini bohsqa bir arrayga qo'shib chiqaring



// 6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring



// 1) 

let num1 = 5;
let num2 = 10;

let sum = num1 + num2;
console.log(sum); 


// 2) 
let a = '12';
let numberA = Number(a);
console.log(numberA); 
console.log(typeof numberA); 

// 3)

let randomNum = Math.floor(Math.random() * 100);

if (randomNum % 2 === 0) {
    console.log(`Случайное число ${randomNum} является четным.`);
} else {
    console.log(`Случайное число ${randomNum} является нечетным.`);
}


// 4)

let userInput = prompt("Iltimos, bir so'z kiriting:");

if (userInput === "Mars") {
    console.log(userInput);
} else {
    console.log("Mars It school");
}


// 5)

let words = ["olma", "banan", "olcha", "apelsin", "nok"];

let longWords = [];

for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
        longWords.push(words[i]);
    }
}

console.log(longWords); 


// 6)

let evenNumbers = [];
let oddNumbers = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i); 
    } else {
        oddNumbers.push(i);
    }
}

console.log("Четные числа:", evenNumbers);
console.log("Нечетные числа:", oddNumbers);
