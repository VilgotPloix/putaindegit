const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

let seventies = entrepreneurs.filter(entrepreneur => (entrepreneur.year > 1970 && entrepreneur.year < 1980))



console.log("entrepreneurs nes dans les annees 70 :")
for (let index in seventies)

console.log(seventies[index].first + " " + seventies[index].last)
console.log("______________________________________________________________________________________________________________________________")

console.log("nom et prenom de chaque entrepreneurs")
for (let index in entrepreneurs)
console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last)

console.log("______________________________________________________________________________________________________________________________")



for (let index in entrepreneurs)
console.log("aujourd'hui, " + entrepreneurs[index].first + " aurait " + (2021 - entrepreneurs[index].year) +  "ans")

console.log("______________________________________________________________________________________________________________________________")

console.log("noms des entrepreneurs de A a Z")

let lastname = []
for (let index in entrepreneurs){
let list = entrepreneurs[index].last
lastname.push(list)}

lastname.sort()

console.log(lastname)
