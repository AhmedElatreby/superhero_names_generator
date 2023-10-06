const superheroes = require('superheroes');
const supervillains = require('supervillains');

 

 
var mySuperHeroName = superheroes.random();
var allNames = superheroes.all;
console.log("My Superhero name: "+mySuperHeroName);


var mySuperNameVillain = supervillains.random();
console.log("My Super villain name: "+ mySuperNameVillain);