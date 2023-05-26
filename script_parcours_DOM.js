// Question 1 : OK
console.log('Combien y a-t-il d\'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.');
console.log(document.getElementsByTagName("p").length);
console.log('**********');

// Question 2 : OK
console.log('Quel est le contenu texte de l\'élément portant l\'id coucou ? Imprime-le dans la console.');
console.log(document.getElementById("coucou").textContent);
console.log('**********');

// Question 3 : OK
console.log('Quelle est l\'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.');
console.log(document.getElementsByTagName("a")[2].href);
console.log('**********');

// Question 4 : OK
console.log('Combien d\'éléments portent la classe compte-moi ? Imprime le résultat dans la console.');
console.log(document.getElementsByClassName("compte-moi").length);
console.log('**********');

// Question 5 : OK
console.log('Combien d\'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.');
console.log(document.querySelectorAll("li.compte-moi").length);
console.log('**********');

// Question 6 :
console.log('Combien d\'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.');
console.log(document.querySelectorAll("ol li.compte-moi").length);
console.log('**********');

// Question 7 :
// La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.
console.log('Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…');
console.log(document.getElementsByTagName("div")[0].getElementsByTagName("ul")[1].getElementsByTagName("li")[0].textContent);
