// Modification n°1
function changeTitles(){
  document.getElementsByClassName("jumbotron-heading")[0].textContent = "Ce que j'ai appris à THP" ;
  document.getElementsByClassName("lead text-muted")[0].textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}

// Modification n°2
function changeCallToActions(){
  document.getElementsByClassName("btn btn-primary my-2")[0].textContent = "OK je veux tester !" ;
  document.getElementsByClassName("btn btn-primary my-2")[0].href = "http://www.thehackingproject.org" ;

  document.getElementsByClassName("btn btn-secondary my-2")[0].textContent = "Non Merci" ;
  document.getElementsByClassName("btn btn-secondary my-2")[0].href = "https://www.pole-emploi.fr/accueil/" ;
}

// Modification n°3
function changeLogoName(){
  document.getElementsByClassName("navbar-brand d-flex align-items-center")[0].textContent = "The THP Experience" ;
  document.getElementsByClassName("navbar-brand d-flex align-items-center")[0].style.fontSize = "2em";
}

// Modification n°4
function populateImages(){
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

  let list_cards_images = document.getElementsByClassName("card-img-top");

  for(let count = 0; count <list_cards_images.length; count++){
    list_cards_images[count].src = imagesArray[count];
  }
}

// Modification n°5
function deleteLastCards(){
  for(let count = 0; count <3; count++){
    let list_cards = document.getElementsByClassName("card mb-4 box-shadow");
    let number = list_cards.length;
    list_cards[number-1].remove();
  }
}

// Modification n°6
function changeCardsText(){
  let list_cards = document.getElementsByClassName("card-text");
  let number = list_cards.length;
  let array_text = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
  "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
  "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]

  for(let count = 0; count <3; count++){
    list_cards[count].textContent = array_text[count];
  }
}

// Modification n°7
function changeViewButtons(){
  let list_cards_button = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
  let number = list_cards_button.length;

  for(let count = 0; count <number; count++){
    list_cards_button[count].classList.remove;
    list_cards_button[count].classList.add("btn-success");
    count ++;
  }
}

// Modification n°8
function pyramide(){
  // Création de la seconde row
  const new_div = document.createElement("div");
  new_div.classList.add = "row"
  const new_node = document.createTextNode("This is new.");
  new_div.appendChild(new_node);
  const section = document.getElementsByClassName("album py-5 bg-light")[0].getElementsByClassName("container")[0]
  section.appendChild(new_div);

  // On déplace la carte JS dans la 2nd row
  const card_js = document.getElementsByClassName("col-md-4")[2]
  section.appendChild(card_js);

}

// Appel des fonctions
changeTitles();
changeCallToActions();
changeLogoName();
populateImages();
deleteLastCards();
changeCardsText();
changeViewButtons();
pyramide();

