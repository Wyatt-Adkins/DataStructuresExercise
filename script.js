// 1a
const jedi = [];
// 1b
jedi[0]="luke";
// 1c
jedi.push("Obi-Wan Kenobi");
// 1d
console.log(jedi.unshift("yoda"));
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
starwarsVillans.splice(2, 4);
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
