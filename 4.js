//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
var avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
var avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0] = "IROMAN";

//1.3 console numero de elementos en el array usando la propiedad correcta de Array.
var avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.length);

//1.4 Añade 2 elementos al array: "Morty" y "Summer".
//Muestra en consola el último personaje del array
var rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
var rickAndMortyCharacters = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];
rickAndMortyCharacters.pop()
console.log(rickAndMortyCharacters[0]);
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
var rickAndMortyCharacters = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);

