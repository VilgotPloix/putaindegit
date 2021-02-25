const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Prejuges', id: 873495, rented: 67 },
  { title: 'Les freres Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forets de Siberie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mange mon pere', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("est ce que tous les livres ont ete empreintes ?")
console.log(" ")

let isRented = books.filter(book => (book.rented >= 1))

for (let index in isRented){
  console.log (isRented[index].title + " | oui, " + isRented[index].rented + " fois")
}

console.log(" ")
console.log("conclusion, tous les livres ont ete empreintes au moins une fois")

console.log("_______________________________________________________________________________________________________________________")

console.log("quel est le livre le plus lu ?")

let tri = []

for (let index in books){
  let list = (books[index].rented + " " + books[index].title)
  tri.push(list)
}

tri.sort()

console.log(" ")
console.log(tri.reverse()[0])

console.log(" ")

console.log("_______________________________________________________________________________________________________________________")

console.log("quel est le livre le moins lu ?")
console.log(" ")
console.log(tri.reverse()[0])


console.log(" ")

console.log("_______________________________________________________________________________________________________________________")

console.log("le livre qui a l'id : 873495")

let find = books.filter(book => (book.id == 873495))

for (let index in find){
  console.log(find[index].title + " " + find[index].id + " " + find[index].rented)
}


console.log(" ")

console.log("_______________________________________________________________________________________________________________________")

console.log("supprime le livre avec l'id 133712")

let del = books.filter(suppr => (suppr.id === 133712))

books.splice(del, 1)

console.log(books)



console.log(" ")

console.log("_______________________________________________________________________________________________________________________")

console.log("trie les livres par ordre alphabétique")

let alfa = []

for (let index in books){
  let putain = (books[index].title + " " + books[index].id + " " + books[index].rented)
  alfa.push(putain)
}

let alpha = alfa.sort()

console.log(alpha)