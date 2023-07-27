// console.log('Bienvenue dans Javascript');
// /**
//  * **************************************
//  * 1-SETUP : DEFER
//  * **************************************
//  ** Antérieur à la vague HTML5, l'attribut defer existait déjà dans les "anciennes" versions
//  ** d'Internet Explorer. Il signifie que le navigateur 
//  *! peut charger le(s) script(s) en parallèle, sans stopper le rendu de la page HTML.
//  *! Contrairement à async, l'ordre d'exécution des scripts est préservé,
//  *! en fonction de leur apparition dans le code source HTML. 
//  *? Il est par ailleurs reporté à la fin du parsing du DOM (avant l'événement DOMContentLoaded).
//  * De nos jours, cet attribut présente moins d'intérêt car les navigateurs
//  * disposent par défaut de techniques internes pour télécharger les 
//  * ressources en parallèle sans nécessairement attendre les autres.
//  */

// /**
//  * **************************************
//  * SETUP : ASYNC
//  * **************************************
//  * *Nouveau venu dans HTML5, async signifie que le script pourra être exécuté de façon asynchrone,
//  ** dès qu'il sera disponible (téléchargé). Cela signifie aussi que le navigateur 
//  ** n'attendra pas de suivre un ordre particulier si plusieurs balises <script> sont présentes,
//  ** et ne bloquera pas le chargement du reste des ressources, notamment la page HTML. 
//  *? L'exécution aura lieu avant l'événement load lancé sur window 
//  *? et ne sera valable que pour les scripts externes au document, 
//  *? c'est-à-dire ceux dont l'attribut src mentionne l'adresse.
//  *? Ce comportement est bien pratique pour gagner en temps de chargement,
//  *! il faut cependant l'utiliser avec prudence : si l'ordre n'est pas respecté,
//  *! un fichier exécuté de façon asynchrone ne pourra attendre le chargement d'un précédent,
//  *! par exemple s'il en utilise des fonctions voire un framework.
//  *! Il ne faudra pas non plus compter appeler document.write() pour écrire dans le document HTML
//  *! puisqu'il sera impossible de savoir à quel moment les actions seront déclenchées.
//  */ 


// //  <!-- Chaine de caractére  -->

//     let maVariable1 = 'Ceci est une chaîne';
//     console.log(maVariable1);

//     // <!-- Nombre -->

//     let maVariable2;
//     maVariable2 = 1;
//     console.log(maVariable2);

//     // <!-- Nombre à virgule -->

//     let maVariable3;
//     maVariable3 = 1.2;
//     console.log(maVariable3);

//     // <!-- Tableau -->

//     let fruits = ['Apple', 'Banana', 'Pineapple'];

//     console.log(fruits);

//     // <!-- Objet -->

//     let maVoiture = new Object();
//     maVoiture.fabricant = "Audi";
//     maVoiture.modele = "R8";
//     maVoiture.annee = 2006;
//     console.log(maVoiture)

//     function testFunction() {
//         console.log('Fonction de test');
//       }
      
    
//       let uneFonction = function maFonction (){
//         console.log('Fonction qui affiche HelloWorld')
//       }
//       console.log(uneFonction);
//       console.log(uneFonction());

//     //   Exercices calculs - Nombres

//     let monNombre1 = '74';
//     monNombre1 + 3;
//     console.log(monNombre1);

//     let monNombre2 = '74';
//     monNombre2 - 3;
//     console.log(monNombre2);

//     let monNombre3 = '2.5';
//     monNombre3 - 1;
//     console.log(monNombre3);

//     let monNombre4 = '5';
//     monNombre4 * 5;
//     console.log(monNombre4);

//     let monNombre5 = '10';
//     monNombre5 % 2;
//     console.log(monNombre5);

//     let num1 = 2;
//     let num2 = 8;
//     let result =  5 + 10 * 3;
//     console.log(result);

//     let a = 2;
//     console.log(a += 3); 

//     let b = 5;
//     console.log(b -= 5); 

//     let c = 4;
//     console.log(c /= 2); 

//     // Exercice Pizzeria
    
//     let nomPizzeria = "  La Pizzeria Raffinata";
//     let nomPizza = "  Pizza norvégienne";
//     let nombrePizza = 2;
//     let prixPizza = 12;
//     let nomClient = "Dupont";
//     let prenomClient = "Anne";
//     let numeroCommandeClient = "N°12345678910";
//     let dateCommandeClient = "le 17/07/2023";
//     let modeDepaiementClient = "paiment CB";
//     let blaguePizzeria = `Qu'est ce qu'une pizza dit à une autre pizza qui lui fait de l'ombre ?  \n"Arrête de me trancher la route!"`;

//     let SumUpOrderPhrase = ` Bonjour ${nomClient} ${prenomClient} 
// voici votre commande: 
// ${nomPizza} 
// pour un total de : ${nombrePizza*prixPizza} € ${numeroCommandeClient} 
// paiment par ${modeDepaiementClient}
// le ${dateCommandeClient} 

// Merci pour votre commande 
// ${blaguePizzeria}`;

//     console.log(SumUpOrderPhrase);

//     // Correction

//     let bonjour = 'Bonjour';
// let unMessage = "Bienvenue";
// let welcome = `Bienvenue`;
// console.log(bonjour,unMessage);
// let unTexte = "Bonjour \"MR Gingle\"";
// let unTxt = 'Aujourd\'hui';
// console.log(unTexte,unTxt);
// let concatenation = bonjour + " et " + unMessage +', il fait beau temps' + unTxt;
// console.log(concatenation);
// let uneTemplateString = `Hello ! ${bonjour} et ${unMessage}
// on retourne à la "ligne" plus besoin des 'antislash'`;
// console.log(uneTemplateString);

// //Exemple la "Pizzeria Rafinata"

// let product = 'Pizza Hawaienne';
// let nomUser = 'Jean Jack';
// let date = '12-12-2012';
// let nomPizzeriaa = `"La Pizzeria Rafinata"`
// let SumUpOrderPhrasee = `le ${date} Bonjour cher ${nomUser}, merci d'avoir passé commande chez ${nomPizzeria}, votre pizza :  ${product}, arrive sous 30 minutes


// Qu'est-ce qu'une pizza dit à une autre pizza qui lui demandait 
// des conseils ? "Suis ta pate et tout ira bien"`;

// console.log(SumUpOrderPhrasee);

// // Exo Tableau 

// let nom = 'Aya';
// let age = '9';
// let passions = ['Lire', 'Dessiner'];
// let tabUser = [nom, age, passions];
// console.log(tabUser);
// console.log(tabUser[2]);
// console.log(tabUser[2][1]);


// // Exo Tableau suite 

// let leNom = 'Jonasz';
// let lePrenom = 'Michel';
// let laPhrase = [];
// let initiales = leNom [0]+ lePrenom [0];
// laPhrase.push(leNom, lePrenom, initiales);
// console.log(laPhrase);

// // Fonction 

// function Myfunction(number=0) {
// console.log(number+33);
// }
// Myfunction(2);

// function Myfunction2(number1, number2) {
//     console.log(number1+number2);
//     }
//     Myfunction2(5, 10);

//     // Exo Scope

//     let testScope1 = 99;
//     function maFonctionTestScope(){
//         let testScope1 = 12;
//         console.log('scope de la fonction :',testScope1);
//     };
//     maFonctionTestScope();
//     console.log('scope hors de la fonction :',testScope1);


//     // exo bug 

//     let something = 44;
//     let lesNews = `il est 99h67`;
//     function functionBugParent() {
//         let something = 9;
//         console.log(something);
   
//         function functionBugEnfant() {
//             let lesNews = `il est 99h67`;
//             console.log(lesNews);
//         }
//     };
//     functionBugParent();
//     console.log(something);

//     // functionBugEnfant();
//     // console.log(lesNews);

//     // Exo Fonction 

//     let notePhilo = 8;
//     let noteSport = 17;
//     let resultatMoy = Moyenne2notes(notePhilo, noteSport); 

//     function Moyenne2notes(note1, note2) {
//       return (note1 + note2)/2;
//     };
 
// console.log(resultatMoy);

// // Exo Focntion Fléchée

// document.addEventListener('click',(clickEvent)=>{
//   console.log(clickEvent);
//   console.log(`Tu as clické ici : 
//   X : ${clickEvent.x} - Y : ${clickEvent.y}
//   à ce moment : ${clickEvent.timeStamp}`);
// });

// // Exo IF ELSE

// let notes = [18, 12, 9];
// let moyenne = (18 + 12 +9)/3;
// function calculMoyenneNote (note) {
//   if (note >=15){
//   return 'Très bien';
//   }
//   else if(note >=10){
//     return 'Assez bien'
//   }
//   else {
//     return 'Refus !'
//   }
// };

// console.log(calculMoyenneNote(moyenne));


// let tab_user = {
//   id: 24052014,
//   'name' : 'Aya',
//   'age' : '9',
//   passions: {
//     passion1: ['Lire', 'Dessiner' ],
//     passion2: 'Roller'
//   }
// };

// console.log(tab_user.name);
// console.log(tab_user.passions);
// console.log(tab_user.passions.passion2);

// tab_user.name = 'Elsa';
// console.log(tab_user.name);

// tab_user.passions.passion1[1] = 'Griboullier';
// console.log(tab_user.passions.passion1);

// // Exo Boucle 

// let listeFilm = ['Ultime Décision','Mission Alcatraz','Attack Force'];

// for (let i = 0 ; i < listeFilm.length ; i ++) {
//   console.log(listeFilm[i]);
// }

// // Exo Boucle Foreach utiliser pour les tableaux

// const film = ['Ultime Décision','Mission Alcatraz','Attack Force'];

// film.forEach(titre => console.log(titre));

// // Exo Boucle For...Of

// for (const element of film) {
//   console.log(element);
// }

// // Exo Boucle For...In utiliser pour les objets

// // const userData = {
// //   name: 'John Doe',
// //   email: 'john.doe@example.com',
// //   age: 25,
// //   dob: '08/02/1989',
// //   active: true
// // };


// const userData1 = { name: 'John Doe', email:'john.doe@example.com' , age: 25, dob:'08/02/1989',  active: true };

// for (const property in userData1) {
//   console.log(`${property}: ${userData1[property]}`);
// }

//  // Exo txt

// let txt = document.getElementsByTagName("p");
// console.log(txt);
// console.log(txt[0]);

//  // Exemple methode array.from

// let text = "ABCDEFG"
// const myArr = Array.from(text);
// console.log('-------------');
// console.log(text);
// console.log(myArr);

// // Exo array.from 

// let textesTab = document.getElementsByTagName("p");
// const Arr = Array.from(textesTab);
// // console.log('-------------');
// // console.log(textesTab);
// // console.log(Arr);

// // Correction

// const lesTxt = document.body.getElementsByTagName("p");
// // const lesTxt = document.getElementsByTagName("p");
// // console.log(lesTxt);
// //HTMLCollection a un système d'indice aussi comme les tableau
// // console.log(lesTxt[0]);


// //* On transforme le HTMLCollection(qui contient tous nos <p>) en Array classique

// // const textesTab2 = Array.from(lesTxt);
// // console.log(textesTab2);

// // Exo Inner Text 

// // Exemple: on modifie la propriété innerText du 1er paragraphe

// // console.log(lesTxt[0]);
// // lesTxt[0].innerText = 'SUPER';

// // Exo Inner text

// // textesTab2.map(uneCase => uneCase.innerHTML = "<h3><em> Je suis un titre. </em></h3>");


// //? bonus syntaxe en ƒ° fléchée

// // textesTab2.map((x,i) => {
// //     x.style.color = "green";
// //     x.style.background = undefined;
// //     console.log(i)
// //     console.log(x)
// // });

// //? Bonus II le retour : utilisation de map pour placer un addEventListener sur chaque <p>

// // textesTab2.map(titre => titre.addEventListener('click',function(){
// //     console.log("Tu as cliqué ici! ")
// // }));

// // Exo avec getElements 

// let lesParagraphes = document.getElementsByTagName("p");
// console.log(lesParagraphes);

// let lesParagraphesSuper = document.getElementsByClassName('super');
// console.log(lesParagraphesSuper);

// let leParagrapheSpecial = document.getElementById('special');
// console.log(leParagrapheSpecial);

// // Exemple de nouvelles fonctions 

// //? Une fonction type querySelector pour récupérer UN élément (le 1er trouvé)
// let lePremierP = document.querySelector('p');
// console.log('lePremierP via querySelector : ',lePremierP);

// //? Une fonction type querySelector pour récupérer UN élément par son ID
// let pSpecial = document.querySelector('#special');
// console.log('pSpecial querySelector + ID',pSpecial);

// //? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par sa classe
// let pSuper = document.querySelector('.super');
// console.log('pSuper querySelector + class',pSpecial);

// //? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
// let allParagraphes = document.querySelectorAll('p');
// console.log('allParagraphes querySelector + balise',allParagraphes);
// console.log('allParagraphes mais on prend le 2e',allParagraphes[1]);


// //! Placer des elements dans une page web
// //? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
// let allParagraphess = document.querySelectorAll('p');
// let laDiv = document.querySelector('.vide');
// let premierH1 = document.querySelector('h1');
// //! insertBefore, on selectionne 2 éléments pour placer l'un avant l'autre
// document.body.insertBefore(allParagraphes[9],premierH1);

// // laDiv.appendChild(allParagraphes[0]);

// document.body.removeChild(allParagraphess[3]);


// //! Créer des elements de texte
// const newTxt = document.createTextNode('DU texte Youhouuuuu');
// document.body.append(newTxt); //Créer c'est bien mais il faut placer

// //!Créer n'importe quel element HTML
// const newH1 = document.createElement('h1');//phase 1 creation
// newH1.innerText = "SALUT !";//phase2 remplissage
// newH1.style.color = 'red';
// document.body.append(newH1);//phase 3 on place dans la page


// // Exo ajout de programme pour afficher des données

// const userDatabis = {
//   name: 'John delavega',
//   email: 'john.doe@example.com',
//   age: 25,
//   dob: '08/02/1989',
//   active: true,
//   img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
// };

// const userData = {
//   name: 'John delavega',
//   email: 'john.doe@example.com',
//   age: 25,
//   dob: '08/02/1989',
//   active: true,
//   img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
// };

// // JS qui va customiser la div du profile utilisateur
// let divUser = document.querySelector('.userProfile');
// console.log(divUser);
// divUser.style.backgroundColor = `red`;
// divUser.style.backgroundImage = `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
// divUser.style.color = `white`;
// divUser.style.width = '500px';
// divUser.style.margin = 'auto';
// divUser.style.padding = '2rem';

// //JS crée une image, renseigne la src , modif taille
// const imgTemplate = document.createElement('img');
// imgTemplate.src = userData.img;
// imgTemplate.style.height = '500px';
// imgTemplate.style.width = '500px';
// divUser.append(imgTemplate);

// // JS crée le titre du name
// const nameTemplate = document.createElement('h1');//phase 1 creation
// nameTemplate.innerText = userData['name'];
// divUser.append(nameTemplate);

// // JS crée le titre du email
// const emailTemplate = document.createElement('h2');//phase 1 creation
// emailTemplate.innerText = userData.email;
// divUser.append(emailTemplate);

// // JS crée le titre du age
// const ageTemplate = document.createElement('h2');//phase 1 creation
// ageTemplate.innerText = userData.age;
// divUser.append(ageTemplate);

// // JS crée le titre du dob
// const dobTemplate = document.createElement('h2');//phase 1 creation
// dobTemplate.innerText = userData.dob;
// divUser.append(dobTemplate);

// // JS crée le titre du active
// const activeTemplate = document.createElement('h2');//phase 1 creation
// activeTemplate.innerText = userData.active;
// divUser.append(activeTemplate);

// // Exo Fonction 

// //! EXO 20.1 
// //TODO: Créer une ƒ° ajouterTexte qui prend 2 params : pseudo et duTexte
// //TODO: La fonction a pour but :
// //TODO: de créer puis remplir et enfin placer un paragraphe contenant pseudo et duTexte, dans la page
// // TODO (Bonus) : Dans le paragraphe le pseudo est affiché en gras

// ajouterTexte('JOsé','Gracia');
// ajouterTexte('Grigny','La grande Borne');
// ajouterTexte('Roi','Heenok');
// ajouterTexte('Dongue','Rodrigue');

// function ajouterTexte(unPseudo, duTexte){
//     const nouveauTexte = document.createElement('p');
//     nouveauTexte.innerHTML = `<strong>${unPseudo}</strong> - ${duTexte}`;
//     document.body.append(nouveauTexte);
// }

// /**
//  * **************************************
//  * 14- Les Classes
//  * **************************************
//  */
// class UserProfile {
//   //! Pas besoin de déclarer function devant le constructor et méthodes
//   constructor(nameUser, mailUser, phoneUser) {
//     this.nameUser = nameUser;
//     this.mailUser = mailUser;
//     this.phoneUser = phoneUser;
//   }
//   getProfileInfo() {
//     console.log('this ',this);
//     return `infos de l'utilisateur : 
//             son nom : ${this.nameUser}
//             son mail : ${this.mailUser}
//             son Tél : ${this.phoneUser}`;
//   }
// }

// const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
// const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");
// exampleUser2.getProfileInfo();


// TODO 1: récupérer le titre h2 dans une variable apiDiv
// TODO 2-1: créer une variable contactAPI à laquelle on assigne une fonction fléchée
// TODO 2-2: dans la F =>, créer une variable data à laquelle on assigne la fonction fetch()
// TODO 2-3: fetch(), prend en param l'Url de l'API
// TODO 2-4: Faire un console.log de data
// TODO 3-1: Tjrs dans la F =>,créer une variable dataTransformed à laquelle on assigne data
// TODO 3-2: sur la variable data on utilise la fonction .json()
// TODO 3-3: Faire un console log de dataTransformed
// TODO 4-1: Tjrs dans la F =>,au InnerHTML de apiDiv, assigner la value dans dataTransformed
// TODO 5: on éxecute notre fonction contactAPI quelquepart dans notre programme

// let apiDiv = document.querySelector('#apiContact');

// let contactAPI = async () => { 
// let data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
// console.log(data);
// let dataTransformed = await data.json();
// console.log(dataTransformed);
// apiDiv.innerHTML = dataTransformed.latitude;
// };

// contactAPI();

let apiDiv = document.querySelector('#apiContact');

let contactAPI = async () => { 
let data = await fetch('https://pokeapi.co/api/v2/pokemon');
console.log(data);
let dataTransformed = await data.json();
console.log(dataTransformed);
apiDiv.innerHTML = dataTransformed.results[0].name;
};

contactAPI();





