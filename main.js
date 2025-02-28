/**
 * Exercice 1
 * Template literals
 */

// Exercice 1.1 : Transforme la concaténation en interpolation de chaîne de caractères avec les backticks `

// function afficheAddresse(address) {
//   return (
//     "Votre adresse est : " +
//     address.street +
//     ", " +
//     address.city +
//     ", " +
//     address.country +
//     "."
//   );
// }

// ====> fonction transformée
function afficheAddresse(address) {
  return (`Votre adresse est : ${address.street}, ${address.city}, ${address.country}`)
}

console.log("Exercice 1.1");
console.log(
  afficheAddresse({
    street: "10 rue de la republique",
    city: "Paris",
    country: "France",
  })
);


// Exercice 1.2 : Utilise les chaînes multilignes avec les backticks ` pour afficher plus simplement le menu
console.log("Exercice 1.2");
// console.log(
//   "Menu de la semaine :\n    - Pâte à tartine\n    - Hoagie\n    - Salade de pommes"
// );

// ====> gestion de chaînes multilignes avec backticks
console.log(
  `Menu de la semaine :
    - Pâte à tartiner
    - Hoagie
    - Salade pommes`
)

/**
 * Exercice 2
 * Décomposition (Destructuring)
 */

const colors = ["Red", "Green", "Blue", "Yellow"];

// Exercice 2.1 : Utilise la décomposition pour créer les constantes de couleurs plutôt que d'accéder aux indices
// const red = colors[0];
// const green = colors[1];
// const blue = colors[2];
// const yellow = colors[3];

console.log("Exercice 2.1");

// ====> Décomposition
// On créé des variables pour pouvoir leur affecter les valeurs de colors (dans l'ordre !)
const [red, green, blue, yellow] = colors;
console.log(red, green, blue, yellow);

// Exercice 2.2 : La même chose, mais en ignorant ici "Red" et "Yellow"
// const green2 = colors[1];
// const blue2 = colors[2];

console.log("Exercice 2.2");

// on utilise la , exclure des éléments
const [, green2, blue2, ] = colors;
console.log(green2, blue2);


// ------ Version objet

const roman = {
  title: "Solo Leveling",
  editor: "kbooks",
  tome: 12,
  type: "fantasy",
  author: "Chugong",
  mainCharacter: {
    name: "Sung Jinwoo",
    animeJapaneseVoice: "Taito Ban",
  },
  characters: [
    {
      name: "Sung Jinah",
      animeJapaneseVoice: "Haruna Mikawa",
    },
    {
      name: "Go Gunhee",
      animeJapaneseVoice: "Banjō Ginga",
    },
  ],
};

// Exercices 2.3 : Décompose l'objet pour récupérer le titre, l'éditeur et le tome dans des constantes
// const title = roman.title;
// const editor = roman.editor;
// const tome = roman.tome;

console.log("Exercice 2.3");
// ====> Décomposition objet 
//On "extrait" les valeurs des clés spécifiées
const {title, editor, tome} = roman;
console.log(title, editor, tome);

// Exercice 2.4 : Décompose l'objet pour récupérer le nom du personnage principal,
// le nom du premier personnage secondaire
// et la voix Japonaise dans l'anime du second personnage secondaire
// const mainCharacterName = roman.mainCharacter.name;
// const secondCharacterName = roman.characters[0].name;
// const thirdCharacterJapaneseVoice = roman.characters[1].animeJapaneseVoice;

console.log("Exercice 2.4");
//On spécifie ce que l"on souhaite extraire + utilisation du : pour créer un alias
const {mainCharacter:{name:mainCharacterName}, characters:[{name:secondCharacterName}], characters:[,{animeJapaneseVoice:thirdCharacterJapaneseVoice}]} = roman

console.log(
  mainCharacterName,
  secondCharacterName,
  thirdCharacterJapaneseVoice
);

// ------

let firstname = "John";
let lastname = "Doe";

// Exercice 2.5 : Faites l'inversion du prénom et nom avec la décomposition
// plutôt qu'avoir une variable temporaire
// let temp = firstname;
// firstname = lastname;
// lastname = temp;

console.log("Exercice 2.5");

[firstname, lastname] = [lastname, firstname];
console.log(firstname, lastname);

// ------
const person = {
  firstname,
  lastname,
  age: 30,
  location: "Paris",
};

// Exercice 2.6 : Fais une décomposition du paramètre pour extraire directement le prénom et le nom
// function hello(person) {
//   console.log(`Bonjour ${person.firstname} ${person.lastname} !`);
// }

console.log("Exercice 2.6");

// on cible directement en paramètre les clés qui nous intéressent dans l'objet person
function hello({firstname,lastname}) {
  console.log(`Bonjour ${firstname} ${lastname} !`);
}

hello(person);

/**
 * Exercice 3
 * Opérateur de reste ...
 */

// Exercice 3.1 : Décompose le tableau colors pour ne garder dans le reste que les couleurs bleue et jaune
// const colors = ["Red", "Green", "Blue", "Yellow"];

// const restOfColors = [];
// restOfColors.push(colors[2]);
// restOfColors.push(colors[3]);

console.log("Exercice 3.1");
// on utilise , pour exclure des valeurs + l'opérateur ...rest => (le rest peut être nommé différemment)
const [, , ...restOfColors] = colors;
console.log(restOfColors);

// Exercice 3.2 : Décompose l'objet, de telle sorte à ce que le reste contienne seulement les clés
// titre, editeur, tome, titre, auteur

// const roman2 = {};
// roman2.title = roman.title;
// roman2.editor = roman.editor;
// roman2.tome = roman.tome;
// roman2.auteur = roman.auteur;

console.log("Exercice 3.2");
//on extrait d'abord des éléments pour les exclure puis on stocke le rest dans une variable.
const { mainCharacter, characters, type, ...roman2 } = roman;
console.log(roman2);


// ------
const randomNumbers = [12, 13, 52, 68, 2, 23, 5];

// Exercice 3.3 : Math.min prend un nombre indéfini d'arguments
// Utilise l'opérateur de reste pour pouvoir passer un tableau
console.log("Exercice 3.3");
console.log(Math.min(...randomNumbers));

// Exercice 3.4 : Transforme cette fonction pour qu'elle puisse prendre
// un nombre indéfini de paramètres car actuellement elle en prend que 3
// function min(a, b, c) {
//   return Math.min(a, b, c);
// }

function min(...numbers) {
  return Math.min(...numbers);
}

console.log("Exercice 3.4");
console.log(min(12, 13, 52, 68, 2, 23, 5)); // Le résultat doit être 2

/**
 * Exercice 4
 * Opérateur de dispersion (spread)
 */

// Exercice 4.1 : Utilise l'opérateur de dispersion pour ajouter "Pink" et "Magenta" dans un nouveau tableau
// const moreColors = colors.concat("Pink", "Magenta");

console.log("Exercice 4.1");
//on utilise ... pour rajouter les valeurs de colors à moreColors
const moreColors = ["Pink", "Magenta", ...colors]
console.log(moreColors);

// Exercice 4.2 : Utilise l'opérateur de dispersion pour créer un nouveau tableau
// où Red est ajouté au début, et "Violet" à la fin
const partialRainbow = ["Orange", "Yellow", "Green", "Blue", "Indigo"];
// const rainbow = ["Red"].concat(partialRainbow, ["Violet"]);

console.log("Exercice 4.2");
const rainbow = ["Red",...partialRainbow,"Violet"];
console.log(rainbow);

// Exercice 4.3 : Copier l'adresse en ajoutant une nouvelle clé pour le code postal
const adress = {
  street: "10 rue de la republique",
  city: "Paris",
  country: "France",
};

// const completeAdress = Object.assign({}, adress, { postalCode: 75001 });

console.log("Exercice 4.3");
// on récupère l'objet et les données existantes et on rajoute une paire clé/valeur
const completeAdress = {...adress, postalCode: 75001};
console.log(completeAdress);

// Exercice 4.4 : Utilise l'opérateur de dispersion pour copier l'objet person et modifier la valeur de l'age à 20
// const person2 = Object.assign({}, person, { age: 20 });

console.log("Exercice 4.4");
// on récupère l'objet et les données existantes et on indique simplement une clé existante avec sa nouvelle valeur.
const person2 = {...person, age: 20};
console.log(person2);

// ------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------- //


/**
 * Exercice 5
 * Fonctions fléchées
 */

// Exercice 5.1 : Convertir en fonction fléchée
// const thatsAllFolks = function () {
//   console.log("That's all folks!");
// };

console.log("Exercice 5.1");
const thatsAllFolks = (()=> {
  console.log("That's all folks!");
});
thatsAllFolks();

// Exercice 5.2 : Convertir toutes les fonctions en fonction fléchée
// Et si c'est possible, faire un return implicite
// const makeDouble = function (numbers) {
//   return numbers.map(function (number) {
//     const newNumber = number * 2;
//     return newNumber;
//   });
// };

console.log("Exercice 5.2");
const makeDouble = ((numbers)=> {
  return numbers.map((number)=> number * 2);
});
console.log(makeDouble([1, 2, 3]));

// Exercice 5.3 : Convertir en fonction fléchée avec un return implicite
// function convertToPerson(firstnameLastnameTuple) {
//   return {
//     firstname: firstnameLastnameTuple[0],
//     lastname: firstnameLastnameTuple[1],
//   };
// }

console.log("Exercice 5.3");
// il est d'usage de contenir la fonction fléchée dans une variable
const convertToPerson = (firstnameLastnameTuple) => ({
  firstname: firstnameLastnameTuple[0],
  lastname: firstnameLastnameTuple[1],
});
console.log(convertToPerson(["John", "Doe"]));

/**
 * Exercice 6
 * Syntaxe raccourcie d'assignation d'objets
**/

// Exercice 6 : raccourci l'assignation à l'objet

// function convertToPerson2([firstname, lastname]) {
//   return {
//     firstname: firstname,
//     lastname: lastname,
//   };
// }

console.log("Exercice 6");
function convertToPerson2([firstname, lastname]) {
  return {firstname, lastname};
}
console.log(convertToPerson2(["John", "Doe"]));

/**
 * Exercice 7
 * Modules import / export
 */

// Exercice 7 : Voici un exemple de code pour gérer un panier d'achat
// On souhaite pouvoir utiliser ce code à plusieurs endroits dans un projet
// On souhaite également le faire pour éviter d'exposer la constante cart
// qui pourrait être modifiée par erreur
//
// Migre ce code dans un module, importe le nécéssaire pour l'utiliser

import * as manageCart from "../modules/cart.js";

console.log("Exercice 7");

console.log("Ajout d'un Shampoing x2 à 10€");
manageCart.addToCart({ product: "Shampoing", price: 10 }, 2);

console.log("Mise à jour du panier : Shampoing x4");
manageCart.updateCartQuantity("Shampoing", 4);

console.log("Ajout d'un Biscuit x10 à 3€");
manageCart.addToCart({ product: "Biscuit", price: 3 }, 10);

console.log("Ajout d'un Biscuit x2 à 3€");
manageCart.addToCart({ product: "Biscuit", price: 3 }, 2);

console.log("Affichage du total panier :");
//ici penser a bien mettre manageCart devant TOUTES les fonctions importées !!
console.log(manageCart.displayAmount(manageCart.computeTotal()));

/**
 * Exercice 8
 * Operation asynchrone
 */

// Exercice 8 : Transforme les opérations asynchrone avec la syntaxe async/await

// RAPPEL : 
// async  : avant la fonction pour définir une fonction asynchrone (qui utilisera AWAIT)
// try : partie dans laquelle on donnera les intructions/actions a réaliser
// catch : permet de récupérer et gérer les erreurs potentielles

async function loadFruits() {
  try {
    const response = await fetch("http://localhost:5500/data/fruits.json");
    return await response.json();
  } catch {
    console.log("Problème dans la récupération des données")
  }
}

async function program() {
  try {
    const fruits = await loadFruits();
    console.log(fruits)
  } catch {
    console.log("Problème lors du chargement des fruits")
  }
}

console.log("Exercice 8");
program();