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

// better have line wrap on
// A. Inside the “DataStructures” folder create a Folder called “DataStructuresExercise”
// B. Inside the “DataStructuresExercise” folder create a script.js file
// C. NOTE: Console logs are NOT necessary unless specifically asked for.
// 1a. Create a const variable named jedi and set the value of the variable to an empty array
// 1b. Using index add "Luke" to the jedi array (Should be the first and only item in the array)
// 1c. Using the Push method add "Obi-Wan Kenobi" to the jedi array
// 1d. Using the Unshift method add "Yoda" the jedi array
// 1e. Using index on the jedi array display "Luke" (You will need a console log for this)
// 1f. Using another array method remove "Obi-Wan Kenobi" from the end of the jedi array
// 1g. Finally, using another method remove "Yoda" from the beginning of the jedi array and display the final value of the array (HINT: It should just be "Luke". Also, you will need a console log for this.)
// 2a. Create a const variable named sithLords and set the value of the variable to the following array items "Darth Vader", "Darth Sidious", and "Darth Maul"
// 2b. Create another const variable named imperialOfficers and set the value of the variable to the following array items "Grand Moff Tarkin" and "Orson Krennic".
// 2c. Using the concat method join the two arrays into one and set the value to a new const variable called starWarsVillains. Also, display the value of the new starWarsVillains variable (Also, make sure the sithLords are first in the new array. Also, you will need a console log for this.)
// 2d. Using the slice method on the starWarsVillains array display an array that contains "Darth Vader" and "Darth Sidious" in the terminal/console (You will need a console log for this)
// 3a. Create a const variable called droids and set the value to an object with the following key value pairs (astromech: "R2-D2"), (protocol: "C-3PO"), and (assassin: "IG-88")
// 3b. Display "R2-D2" from the droids variable/object in terminal/console using square brackets "[]" (You will need a console log for this)
// 3c. Display "C-3PO" from the droids variable/object in terminal/console using dot "." (You will need a console log for this)
// 3d. In the droids variable/object change the "IG-88" value to "IG-11"
// BONUS
// 4. Using indexes display the "V" from "Darth Vader" from the starWarsVillains array (You will need a console log for this)
// 5. Using only negative numbers display "Darth Sidious" from the sithLords array using Slice (You will need a console log for this)
// 6a. Create a const variable named starWarsMovies and set the value to an array of three objects (AKA An array with three items in it and each item is a separate object). Use the following keys and values for each object in the array: 1st OBJECT (episodeOne: "The Phantom Menace", episodeTwo: "Attack of the Clones", and episodeThree: "Revenge of the Sith"). 2nd OBJECT (episodeFour: "A New Hope", episodeFive: "The Empire Strikes Back", and episodeSix: "Return of the Jedi"). 3rd OBJECT (episodeSeven: "The Force Awakens", episodeEight: "The Last Jedi", and  episodeNine: "The Rise of Skywalker"). I would suggest using some copy and paste on this one.
// 6b. Using an array method add the following string values ("Solo" and "Rogue One") as items in the starWarsMovies array between the 1st and 2nd objects (AKA Items) in the starWarsMovies array.
// When finished, create a repository in the “DataStructuresExercise” Folder as well as on GitHub. Add and commit everything in the DataStructuresExercise folder and push it up to your GitHub repository. Then paste the link to your GitHub repository page in the form in google classroom