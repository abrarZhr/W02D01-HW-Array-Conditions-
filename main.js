const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

// sum
let Numbers = [23,54,32,87,47];
let sum= 0;
for (let i=0 ; i<=Numbers.length ; i++){
    sum+=Numbers[i];

    console.log(sum);
   
}



//max num
let num = [16,4,2,0,19,6];
let m=0;
for (let i=0 ; i<num.length ; i++){
if (num[i] > m ){
    m=num[i];
}
 }
 console.log(m);


// let num1 = [1,2,3,4,5,6,7,8,9,10];
// let re =[];

// for (let i = 0 ; i<num1.length-1 ; i--){
//  console.log(num1[i])
// }

//prime number
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let i = 0;
while(arr[i] % 2 === 0) {
    wArr.pop(wArr[i])
    i++
}
console.log(arr);

// MAP
let n1 = characters.map(n => n.name)
console.log(n1);



// REDUCE 
let mass1 = characters.map(ms => ms.mass)
let redu = mass1.reduce((accumulator, mas) =>  {
    return accumulator + mas
})
console.log(redu);



// FILTER 
let filt1 = characters.filter(f1 => f1.mass > 100)
console.log(filt1);

let filt2 = characters.filter(f2 => f2.gender == "female")
console.log(filt2);


// SORT
let sort1 = characters.map(s1 => s1.name).sort()
console.log(sort1);

let sort2 = characters.map(s2 => s2.gender).sort()
console.log(sort2);


// EVERY
let all1 = characters.every(ev1 => ev1.eye_color == "blue")
console.log(all1);

let all2 = characters.every(ev2 => ev2.gender == "male")
console.log(all2);


// SOME 
let some1 = characters.some(sm1 => sm1.gender == "male")
console.log(some1);

let some2 = characters.some(sm2 => sm2.mass < 50)
console.log(some2);
