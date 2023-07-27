

//************************** EXO JS CLASS **************************

// Créer un programme permettant de calculer l'IMC d'une personne

// TODO
// TODO créer une classe Imc avec un constructeur qui recevra un nom, un poids, une taille
// TODO créer une fonction de calcul d'Imc, qui retourne le résultat du calcul (a 2 nombre après la virgule si possible)
// TODO Créer une fonction d'affichage "display" elle à pour rôle d'afficher en console:
// TODO nom de la personne, son poids, sa taile et son Imc dans une phrase
// TODO En dehors de la classe(donc dans le programme principal), récupérer la variable list(un tableau de nouvelles instances de la calss)
// TODO Trouver un moyen de parcourir les éléments dans la variable list sur chaque élément utiliser la fonction display

// //* progr principal -> injection des données

// //*Boucle forEach qui parcourt le tableau avec une variable temporaire uneCase
// list.????((uneCase) => uneCase.display());


class Imc {
    constructor(nom, poids, taille) {
    this.nom = nom;
    this.poids = poids;
    this.taille = taille;
   }
  imc() {
    return (this.poids / (this.taille * this.taille)).toFixed(2);
  }
  display() {
    console.log( `${this.nom} (${this.poids} kg , ${this.taille} M) a un imc de ${this.imc()}`);
  }
  }
  
  let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
  ];


  list.forEach((uneCase) => uneCase.display());

//************************** EXO JS DOM **************************

// let firstLink = document.querySelector('a');
// console.log(firstLink);
// let allLinks = document.querySelectorAll('a');
// console.log(allLinks);

// let firstTitle = document.querySelector('h1');
// console.log(firstTitle);

// let firstImg = document.querySelector('img');
// console.log(firstImg);

// firstTitle.style.backgroundColor = 'blue';
// firstTitle.style.color = 'beige';

// firstTitle.className = 'laClasse';
// firstLink.href = 'https://www.google.com'
// firstImg.src = 'https://picsum.photos/200/300'

// firstImg.addEventListener('click',()=>{
//     console.log('CA CLICK A DONF');
//   });


//************************** EXO addEventListener CLICK **************************

// Se débrouiller pour que quand on click sur le titre h1 avec l'id mainTitle cela modifie ce qui est écrit dedans

// Bonus : Quand on reclick ça remet le titre d'origine

// let firstTitleh1 = document.getElementById('mainTitle');
// console.log(firstTitle);

// function display(){
//     firstTitleh1.innerText = "Ce titre est modifié";
//     console.log(display);
// }

// firstTitleh1.addEventListener('click',() =>{
//     display();
// });

// * addEventListener - click
//? Mode ƒ° => (anonyme + fléchée) 
let leH1 = document.querySelector('#mainTitle');
let selectTitle = false;
leH1.addEventListener('click',()=>{
    leH1.innerText = selectTitle ? '-- 🥳 --':'D.O.M Events';
    selectTitle = !selectTitle;
});


//? Mode fonction anonyme classique
// leH1.addEventListener('click',function(){
//     leH1.innerText = 'LOL MDR';
// });
//? la fonction est en dehors
// function maModifTitre(){
//     leH1.innerText = 'LOL MDR';
// }
//? On apelle la fonction quand click
// leH1.addEventListener('click',maModifTitre());



//************************** EXO Click + classListe **************************

// ** addEventListener - classList.add() - classList.remove() - classList.toggle()

// En CSS on crée une classe maCouleur (vous modifiez ce que vous voulez)
// TODO 1: récupérer le titre dans une variable leTitre
// TODO 2: récupérer tous les liens dans une variable lesLiens
// TODO 3-1: Sur le 1er lien placer un addEventListener qui écoute le "click" et éxecute une fonction
// TODO 3-2: Dans cette fonction on ajoute la classe "maCouleur" sur titre
// TODO 4-1: Sur le 2e lien placer un addEventListener qui écoute le "click" et éxecute une fonction
// TODO 4-2: Dans cette fonction on supprime la classe "maCouleur" sur titre
// TODO 4-1: Sur le 3e lien placer un addEventListener qui écoute le "click" et éxecute une fonction
// TODO 4-2: Dans cette fonction on toggle la classe "maCouleur" sur titre


let leTitre = document.querySelector('h1');

let lesLiens = document.querySelectorAll('a');


 lesLiens[0].addEventListener('click',()=>{
    leTitre.classList.add('maCouleur');
  });

  lesLiens[1].addEventListener('click',()=>{
    leTitre.classList.remove('maCouleur');
  });

  lesLiens[2].addEventListener('click',()=>{
    leTitre.classList.toggle('maCouleur');
  });


// !EXO 24.5 
// ** addEventListener - capter un évènement "click" - coord x - coord y

// TODO 1: sur document, placer un addEventListener qui écoute le "click" et éxecute une fonction qui a unEvent en paramètre
// TODO 2: Dans cette fonction on console log unEvent 
// TODO 3: à partir du console log retrouver les propriétés de unEvent qui correspondent au coordonnées du click
// TODO 4: Connaissez-vous des propriétés CSS dans lesquelles on peut se servir des coord du click pour le placer au bon endroit ? (pensez aussi à mettre la position de l'image. en absolute) (modifié)


// document.addEventListener('click', (unEvent)=> {
//   console.log(unEvent.offsetX, unEvent.offsetY);
//   let imagejavascript = document.createElement("img");
// imagejavascript.src = "https://fastly.picsum.photos/id/851/200/200.jpg?hmac=JVRP-bj1-hofsGmrxkRZ4VaDr699PvCv6i8zcc6n-GQ";
// let posX = unEvent.x;
// let posY = unEvent.y;
// imagejavascript.style.position = "absolute";
// imagejavascript.style.top =  posX +"px";
// imagejavascript.style.left = posY +"px";
// console.log(imagejavascript);
// document.body.append(imagejavascript);
// });


// CORRECTION 
// !EXO 24.5 
// ** addEventListener - capter un évènement "click" - coord x - coord y
// TODO 1: sur document, placer un addEventListener qui écoute le "click" et éxecute une fonction qui a unEvent en paramètre
// TODO 2: Dans cette fonction on console log unEvent 
// TODO 3: à partir du console log retrouver les propriétés de unEvent qui correspondent au coordonnées du click
// TODO 4: Connaissez-vous des propriétés CSS dans lesquelles on peut se servir des coord du click pour le placer au bon endroit ? 
// document.addEventListener('click', function(eventClick){
//   console.log(eventClick);
//   console.log('Les coord : ',eventClick.x, eventClick.y);
//   // On Créer une image
//   const monImg = document.createElement('img');
//   const tailleImg = 150;
//   // On rajoute une src à l'image
//   monImg.setAttribute('src', `https://picsum.photos/${tailleImg}/${tailleImg}`);
//   // On modifie le type de position de l'image
//   monImg.style.position = 'absolute';
//   // On modifie la position top de l'image
//   monImg.style.top = eventClick.y - tailleImg /2 +'px';
//   // On modifie la position left de l'image
//   monImg.style.left = eventClick.x -tailleImg /2 +'px';
//   //On place l'image fraichement créee dans le body de la page
//   document.body.append(monImg);
// });


//! EXO LOAD
// ** addEventListener - load
// TODO 1: récupérer toutes les images dans une variable lesImages
// TODO 2: Dans une v ariable tabImg on transforme lesImages en tableau avec Array.from()
// TODO 3-1: Sur tabImg on utilise la fonction map().
// TODO 3-2: Dans map(), on lui passe une F => qui prend 2 params : uneImage et index
// TODO 3-3: Dansla F =>, sur uneImage on place un addEventListener qui écoute "load" et éxecute une Fonction
// TODO 3-4: Dans la F du addEventListener, on affiche index en consoles

let lesImages = document.querySelectorAll('img');
let tabImg = Array.from(lesImages);

tabImg.map((uneImage, index) => {
  uneImage.addEventListener('load',function() {
    console.log(`Image numéro : ${index} – vient de finir de charger.`);
});
});

// !EXO 24.2 addEventListener - "mouseout" - display
// addEventListener - "mouseout" - display
// TODO: EN CSS le titre H3 à un display à none
// TODO 1: Dans une variable monTitre, récupérer le titre h3
// TODO 2: Sur document, placer un addEventListener qui écoute "mouseout" et qui execute une fonction
// TODO 3: dans cette fonction, on va modifier dans le style de monTitre le display que l'on met à "block"


monTitre = document.querySelector('h3');
monTitre.style.display = "none";

document.getElementById('img1').addEventListener('mouseleave', function() {
  monTitre.style.display = "block";
  monTitre.style.color = "orange";
}); 

//FOCUS - BLUR
 
//! EXO 24.3  addEventListener - focus - blur
// TODO 1: récupérer l'input dans une variable leInput
// TODO 2-1: sur leInput, utiliser addEventListener pour surveiller "focus" 
// TODO 2-2:et execute une fonction qui modif la bg color de leInput en (couleur au choix)
// TODO 3-1: sur leInput, utiliser addEventListener pour surveiller "blur"
// TODO 3-2: et execute une fonction qui modif la bg color de leInput en blanc ou transparent

leInput = document.querySelector('input');

document.getElementById('exampleFormControlInput1').addEventListener('focus', function () {
leInput.style.backgroundColor = 'yellowgreen';
});

document.getElementById('exampleFormControlInput1').addEventListener('blur', function () {
  leInput.style.backgroundColor = 'transparent';
  leInput.style.color = 'blue';
  });




  // ! Exo SCROLL
// ** addEventListener - capter un évènement "scroll" - scrollHeight  - innerHeight - scrollY
// TODO 1: Dans une variable laBar, récupérer la div qui possède la classe .bar
// TODO 2: Sur document, placer un addEventListener qui écoute "scroll" et execute une fonction
// TODO 3: dans cette fonction, on console log document.body.scrollHeight (la hauteur de page), innerHeight (hauteur de l'affichage) et scrollY (la position du scroll)
// TODO 4: Ensuite, dans une variable scrollMax, on soustrait à document.body.scrollHeight, innerHeight
// TODO 5: Dans une variable onEstOu, on fait un pourcentage de scrollY sur scrollMax
// TODO 6: Modifier dans le style de laBar, la width en lui assignant onEstOu en "%"

document.addEventListener('scroll', () => {
  const scrollMax = document.body.scrollHeight - innerHeight;
  const onEstOu = ((scrollY / scrollMax) * 100);
  console.log('Hauteur de page', innerHeight);
  console.log('Hauteur affichage', scrollY);
  console.log('Scroll Position', scrollMax);
  console.log('Pourcentage de scroll', onEstOu);

  const laBar = document.querySelector('.bar');
  laBar.style.width = onEstOu + '%';
});

//! EXO 24.4
// TODO 1: récupérer le textarea du formulaire dans une variable txt
// TODO 2: récupérer le button du formulaire dans une variable btn
// TODO 3-1: Sur txt placer un addEventListener qui écoute les touches clavier "keyup" et éxecute une fonction
// TODO 3-2: Dans cette fonction, si ce qu'on tape dans l'input (sa valeur) dépasse 5 caractères alors on désactive le button


const txt = document.querySelector('textarea');
const formBtn = document.querySelector('#formSubmitBtn');

txt.addEventListener("keyup", () => {

    txt.value.length>= 5 ? formBtn.disabled = true : formBtn.disabled = false
});

// Correcetion

const monTextArea = document.querySelector('#formMessage');
const monBtn = document.querySelector('#formSubmitBtn');
console.log(monTextArea);
console.log(monBtn);

monTextArea.addEventListener('keyup',()=>{
    // ? Mode cond ternaires
    monBtn.disabled = monTextArea.value.length>=5 ? true : false;
    // ? Mode IF classique 
    // if(monTextArea.value.length>=5){
    //    monBtn.disabled = true;
    // }
    // else{
    //     monBtn.disabled = false
    // }
});

// EXO 

// ** preventDefault - addEventListener - "submit" - form.reset()
// TODO 1: récupérer le formulaire dans une variable monForm
// TODO 2-1: sur monForm on place un addEventListener qui écoute "submit" et qui exécute une fonction qui a event en paramètre (on veut capter l'event)
// TODO 2-2: Dans cette fonction, sur event on utilise la fonction preventDefault()
// TODO 3-2: Puis on console log event
// TODO 3-3 : sur monForm on utilise la fonction .reset()

const monForm = document.querySelector('#myForm');

monForm.addEventListener('submit',(event)=>{
event.preventDefault();
console.log(event);
console.log( 'ok formulaire envoyé');
monForm.reset();
});


// ! Exo SetTimeout
// ** setTimeout() - innerHtml - opacity - backgroundColor
// TODO 1: Dans une variable monTitre, récupérer le titre h2
// TODO 2: on execute la fonction setTimeout() qui prend 2 paramètres: une fonction et un nombre (les miliseconde)
// TODO 3: dans la fonction en param de setTimeout(),modifier dans le style de monTitre l'opacité  que l'on met à 1
// TODO 3-2: modifier dans le style de monTitre le background color  que l'on met à (couleur au choix)
// TODO: 3-3: assigner une chaine de caractères (au choix) au innerHTML de monTitre 

// const monTitreh2 = document.querySelector('#secondadryTitle');
// const timeout = setTimeout(myFunction, 1000);

// function myFunction() {
//  monTitreh2.style.opacity =  '1'; 
//  monTitreh2.style.backgroundColor = 'yellowgreen'; 
//  monTitreh2.innerHTML = "Hello world !";
// };


const monTitreh2 = document.querySelector('#secondadryTitle');
setTimeout(() =>{(monTitreh2.style.opacity =  '1', 
monTitreh2.style.backgroundColor = 'yellowgreen',
monTitreh2.innerHTML = "Congrats Laurent you're the best developer!"
  )}, 2000);



  //! EXO SetInterval 
// ** Executer 1 script ttes les X sec - addEventListener - click - innerHTML
// TODO 1: récupérer le titre h3 dans une variable monTitre
// TODO 2: créer une variable timer initialisée à 3
// TODO 3-1: sur monTitre on place un addEventListener qui surveille le click et qui exécute une fonction
// TODO 3-2: Dans cette fonction, créer une variable countDown à laquelle on assigne la fonction setInterval()
// TODO 3-3: setInterval() prend en 1er param, une fonction et en 2e param 1000 ms
// TODO 4-1: Dans la fonction de setInterval(), SI timer est supperieur à 0, on assigne au innerHTML de monTitre, timer
// TODO 4-1: SINON, on assigne au innerHTML de monTitre, "GO GO GO", ensuite on utilise clearInterval pour stopper l'intervale
// TODO 5: Après ces conditions, on décrémente timer

const monTitreh4 = document.querySelector('h4');
let timer = 3;

  monTitreh4.addEventListener('click', () => {
  const countDown =setInterval(() => {if (timer > 0) {
    monTitreh4.innerHTML = timer;
  }else{
    monTitreh4.innerHTML = 'GO GO GO';
    clearInterval(countDown);
  }
  console.log(timer);
timer -= 1;
    }, 1000);
  });


  // EXO Class PME
// Gérer une PME
 
//TODO Créer une classe pme et une classe Employee utiliser des fonctions, faire le bilan annuel de l'entreprise et l'afficher en console
//TODO Détails 3 salarié qui gagnent par mois : 2000, 3000, 4000 euros

/*Revenu  = 300 000  
FF Frais Fixes = 20 000  
FA Frais annuels = 50 000  
N  Mois= 12 
XXX taxes = 90 % */


class Employee {
  constructor(nom, prenom , age, salaireMensuel) {
  this._nom = nom;
  this._prenom = prenom;
  this._age = age;
  this._salaireMensuel = salaireMensuel;
  this._cout = this.calculCout();
 }
getCout() {
  this._cout;
}
calculCout(){
const nMoisSalaires = 12;
const taxe = 0.9 ;
return this._salaireMensuel * nMoisSalaires * (1 + taxe);
}
}

class Pme {
  constructor(nomPme, equipe, revenus, fraisFixes, fraisDachats) {
    this._nomPme = nomPme;
    this._equipe = equipe;
    this._revenus = revenus;
    this._depenses = fraisFixes + fraisDachats;// On peut assigner directement un calcul ici
    this._bilan = 0;    // attribut en OutMode a calculer
  }

  bilanCalculed () {        
    let totalEquipe = 0;
    console.log(`${this._nomPme} : Cout Initial : ${this._depenses}`);



    for (let unEmploye of this._equipe){ 
          totalEquipe += unEmploye._cout;
        }

    console.log(`${this._nomPme} : Cout Total Equipe : ${totalEquipe}`);

    this._depenses += totalEquipe;
    console.log(`${this._nomPme} : VENTES : ${this._revenus}`);

    this._bilan = this._revenus - this._depenses;
    console.log(`${this._nomPme} : BILAN : ${this._bilan}`);
  }
};

const pme = new Pme (
  //Le nom entreprise
    "Ma Petite Entreprise - ", 
    //L'equipe de salariés (un tableau)
    [new Employee ("Duval", "Paul", 30, 2000),
    new Employee ("Durand", "Alain", 40, 3000),
    new Employee ("Dois", "Sylvia", 50, 4000),],
     //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);
pme.bilanCalculed();

// EXO KEY UP 

// ** mini éditeur de texte - addEventListener - keyup - innerHTML
// TODO 1: récupérer le textarea dans une variable monTxt
// TODO 2: récupérer la div (celle avec l'id formrender ?) dans une variable rendu
// TODO 3-1: sur monTxt on place un addEventListener qui surveille le clavier et qui exécute une fonction
// TODO 3-2: Dans cette fonction, au innerHTML de rendu on assigne la VALEUR contenue dans monTxt

let monTxt1 = document.querySelector('textarea');
let rendu = document.getElementById('formRender');

monTxt1.addEventListener('keyup', function(){
  rendu.innerHTML = monTxt1.value;
  });

  // VANTA.BIRDS({
  //   el: "#myForm",
  //   mouseControls: true,
  //   touchControls: true,
  //   gyroControls: false,
  //   minHeight: 200.00,
  //   minWidth: 200.00,
  //   scale: 1.00,
  //   scaleMobile: 1.00
  // })

  VANTA.WAVES({
    el: "#myForm",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
  })

  // VANTA.FOG({
  //   el: "#myForm",
  //   mouseControls: true,
  //   touchControls: true,
  //   gyroControls: false,
  //   minHeight: 200.00,
  //   minWidth: 200.00,
  //   highlightColor: 0x2c00ff,
  //   lowlightColor: 0x8600ff,
  //   blurFactor: 0.63,
  //   speed: 1.20,
  //   zoom: 1.90
  // })


// TODO 1: récupérer le textarea dans une variable monTxt
// TODO 2: récupérer la div dans une variable rendu
// TODO 3: à la valeur contenue dans monTxt on assigne localStorage, sur localStorage on utilise la fonction getItem("monSuperTexte")
// TODO 4-1: ensuite, SI la valeur dans monTxt est définie,
// TODO 4-2: alors on assigne au innerHTML de rendu, localStorage sur lequel on utilise la fonction getItem("monSuperTexte")
// TODO 5-1: (en dehors du IF)Sur monTxt on place un addEventListener qui surveillle le clavier et exécute une fonction
// TODO 5-2: Dans cette fonction, sur localStorage on utilise la fonction setItem
// TODO 5-3: setItem() prend en 1er param "monSuperTexte", et en 2e param la valeur contenue dans monTxt
// TODO 5-4: on assigne au innerHTML de rendu la valeur contenue dans monTxt

// let monTxt = document.querySelector('textarea');
// let rendu = document.getElementById('formRender');

monTxt1.value = localStorage.getItem('monSuperTexte');

if (monTxt1.value) {
rendu.innerHTML=localStorage.getItem('monSuperTexte');
}

monTxt1.addEventListener('keyup',() => {
localStorage.setItem('monSuperTexte', monTxt1.value);
rendu.innerHTML = monTxt1.value;
})


// try{
//   prenom
//   alert('Bonjour');  
// }catch(err){
//   alert(`Erreur Détectée ALERTE STOPPEZ TOUT: 
//       -----------
//       Le Nom de l'erreur 
//       ${err.name}
//       -----------
//       Le Message de l'erreur  :
//       ${err.message}
//       ----------
//       L'emplacement de l'erreur:
//       ${err.stack}`);
// }
// alert(`Ce message s'affiche correctement`);


// function division(){
//   let x = prompt('Entrez un premier nombre (numérateur)');
//   let y = prompt('Entrez un deuxième nombre (dénominateur)');
  
//   if(isNaN(x) || isNaN(y) || x == '' || y == ''){
//       throw new Error('Merci de rentrer deux nombres');
//   }else if(y == 0){
//       throw new Error('Division par 0 impossible')
//   }else{
//       alert(x / y);
//   }
// }

// division();

