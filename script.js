// 1a
const jedi = [];
// 1b
jedi[0]="Luke";
// 1c
jedi.push("Obi-Wan Kenobi");
// 1d
console.log(jedi.unshift("Yoda"));
// 1e
console.log(jedi[1]);
// 1f 
jedi.splice(2, 2);
// 1g
const yoda = jedi.shift();
// log
console.log(jedi);
// 
// 2a
const sithlords = ["Darth Vader", "Darth Sidious", "Darth Maul"];
// 2b
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];
// 2c
const starwarsVillans = sithlords.concat(imperialOfficers);
console.log(starwarsVillans)
// 2d
starwarsVillans.splice(0, 2);
console.log(starwarsVillans)
// 
// 3a
const droids = {
    a: {Astromech:"R2-D2"},
    b: {Protocol:"C-3PO"},
    c: {Assassin:"IG-88"}
};
// 3b
console.log (droids[`a`]["Astromech"]);
// 3c
console.log (droids.b.Protocol);
// 3d
droids.c.Assassin = "IG-11"
console.log (droids.c.Assassin)
// node script.js

// Bonus

// 4
console.log(starwarsVillans[0].slice(6,7))

// 5
console.log(sithlords.splice(-5,-1))

// 6a
const starwarsmovies = [
{episodeone:"the phantom menace",
episodetwo:"attack of the clones",
episodethree:"revenge of the sith"},

{episodefour:"a new hope",
episodefive:"empire strikes back",
episodesix:"return of the jedi"},

{episodeseven:"the force awakens",
episodeeight:"the last jedi",
episodenine:"the rise of skywalker"}
]
// 6b
starwarsmovies.splice(1,0,"solo","rouge one");
console.log(starwarsmovies);