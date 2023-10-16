const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

//push
//marvel_heros.push(dc_heros) 
//console.log(marvel_heros) // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heros[3][2]) //batman

//concat //also return new array
let all_heros=marvel_heros.concat(dc_heros)
// console.log(marvel_heros) //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(all_heros) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread operator
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros) //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// flat method
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
//console.log(real_another_array) //[1,2,3,4,5,6,7,6,7,4,5]

//string or object to Array
console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("hitesh")) //[ 'h', 'i', 't', 'e', 's', 'h' ] //array

console.log(Array.from({name: "hitesh"})) // [] //interesting

//values to array
let score1=100
let score2=100
let score3=100
console.log(Array.of(score1,score2,score3)) // [ 100, 100, 100 ]










