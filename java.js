// Inverser une chaine : ecrivez une fonction qui inverse une chaine donnee.
function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}

// cree une fonction qui compte le nombre de caractere dans une chaine
function compterCaracteres(chaine) {
    return chaine.length;
}

// implentez qui met en majuscule la premier lettre de chaque mot dans une phrase

function mettreMajusculesPremieresLettres(phrase) {
    return mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();
});

// ecrivez des fonctions pour rechercher les valeurs maximales et minimales dans un tableau de nombres.
function mettrePremiereLettreMajuscule(phrase) {
    
    let mots = phrase.split(' ');

    
    for (let i = 0; i < mots.length; i++) {
        
        let mot = mots[i];

        
        if (mot.length > 0) {
            
            mots[i] = mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();
        }
    }

    
    let phraseMajuscule = mots.join(' ');

    return phraseMajuscule;
}

// cree une fonction qui calcul la somme de tous les elements d;un tableau

function calculerSommeTableau(tableau) {
    
    const somme = tableau.reduce((accumulateur, valeurCourante) => {
        return accumulateur + valeurCourante;
    }, 0); 

    return somme;
}


// implementez une fonction qui filtre les elements d'un tableau en fonction d'une condition donnee.

function filtrerTableau(tableau, condition) {
    
    const tableauFiltre = tableau.filter(element => condition(element));

    return tableauFiltre;
}

//  ecrivez une fonction pour calculer la factorielle dun nombre donne.


function calculerFactorielleIterative(n) {
    if (n < 0) {
        return 
    }

    let resultat = 1;
    for (let i = 2; i <= n; i++) {
        resultat *= i;
    }

    return resultat;
}


// cree une fonction pour verifier si un nombre est premier pou non

function estNombrePremier(nombre) {

    if (nombre <= 1) {
        return false;
    }

    
    if (nombre === 2) {
        return true;
    }

    
    if (nombre % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(nombre); i += 2) {
        if (nombre % i === 0) {
            return false;
        }
    }

    
    return true;
}

//  implementez une fonction pour generer la sequence de Fibonacci jusqu'a un nombre donne de termes. (recherche sur le net)

function genererFibonacci(nbTermes) {
    
    if (nbTermes <= 0) {
        return [];
    }

    let sequence = [];

    
    if (nbTermes >= 1) {
        sequence.push(0);
    }

    
    if (nbTermes >= 2) {
        sequence.push(1);
    }
    for (let i = 2; i < nbTermes; i++) {
        let nextTerm = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextTerm);
    }



