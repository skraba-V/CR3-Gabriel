var performer1 = 20;
var performer2 = 20; 
var performer3 = 25; 
var performer4 = 15; 
var performer5 = 30; 
var performer6 = 40; 
var performer7 = 50; 
var performer8 = 15; 
var performer9 = 25;

var stage1 = [performer1, performer2, performer3];
console.log(stage1);

var stage2 = [performer4, performer5, performer6];
console.log(stage2);

var stage3 = [performer7, performer8, performer9];
console.log(stage3);


var fest_day1 = (performer1 + performer4 + performer7)
var fest_day2 = (performer2 + performer5 + performer8)
var fest_day3 = (performer3 + performer6 + performer9)

var festOne = ["Dino Merlin", "Ivan Zak", "Severina"]
var festTwo = ["Gibonni", "Mladen Grdovic", "Tony Cetinski"]
var festTree = ["Edo Majka", "Jelena Rozga", "Hari Mata Hari"]

console.log(fest_day1)
console.log(fest_day2)
console.log(fest_day3)

console.log("On the first day of the festival, I was lucky to watch " + festOne)
console.log("Then I watched " + festTwo + " on the second day and it cost me " + fest_day2 + "€ in total that day")
var cost = (fest_day1 + fest_day2 + fest_day3)
console.log("I was a bit tired on the third day but it was so much worth it to watch " + festTree + " and I spent " + cost + "€ for the three days of the festival")

var mat = (fest_day1 + fest_day2 + fest_day3)
var look = (mat / 100 * 30)
var rio = (mat - look)
console.log(look)
console.log(mat - look) 

console.log("If I had booked the concert with enough time in advance, it would have cost me a total of " + rio + "€ and I would have saved " + look + "€")
