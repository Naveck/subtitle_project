import fs from "fs";

const folderContents = fs.readdirSync("back_to_the_future_dutch");

let allContent = "";
for (let i = 0; i < folderContents.length; i++) {
  allContent += fs.readFileSync(
    "back_to_the_future_dutch/" + folderContents[i]
  );
}

allContent = allContent
  .replace(/[^a-z]/gi, " ") // alle niet letters vervangen door een spatie, hoedje is niet
  .replace(/ +/g, " ") // vervang meerde spaties door een spatie
  .replace(/font|color/gi, " ")
  .toLowerCase()
  .split(" ")
  .filter(function (word) {
    return word.length >= 4;
  });

const woordenMetAantalVoorkomen = allContent.reduce(function (obj, woord) {
  obj[woord] = obj[woord] + 1 || 1;
  return obj;
}, {});

// console.log(woordenMetAantalVoorkomen);

const uniqueWords = Object.keys(woordenMetAantalVoorkomen);

uniqueWords.sort(function (woordA, woordB) {
  return woordenMetAantalVoorkomen[woordB] - woordenMetAantalVoorkomen[woordA];
});

console.log(uniqueWords);
