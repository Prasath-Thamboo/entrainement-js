let online = true

let message = ""


if (online) {

message = "Utilisateur en ligne !"

} else {

message = "Utilisateur hors ligne !"

}

console.log(message)












// const mots = ["Cachalot", "Alice", "Camille"]
// const phrases = ["Bonjour salut aurevoir","pourquoi c'est moi", "Il était une fois" ]



// function afficherResultat (score, nb){
//     console.log('Votre score est de ' + score + ' sur ' + nb)
// }

// function choixJeu(){
//     let choix = prompt("choisissez votre jeu")
//     while ( choix !== "phrase" || choix !== "mot" ){
//         choix = prompt("choisissez votre jeu")
//     } 
//     return choix
// }

// function jeuBoucle(liste) {
//         for(let i = 0; i < liste.length; i++) {
//         let motCherché = prompt ('entrez le mot ' + liste[i])
//             if (motCherché === liste[i]){
//                 score++
//             }
//         }  
//         return score
// }

// function lancerJeu(){
//     let choix = choixJeu()
//     let score = 0 

//     if (choix === 'mot'){
//         jeuBoucle(mots)
//     }
// }











// const students = [
//     {
//         name: 'john', 
//         notes: [12, 14, 15, 16]
//     },
//     {
//         name: 'Sopgie', 
//         notes: [1, 14, 1, 16]
//     },
//     {
//         name: 'jin', 
//         notes: [12, 4, 15, 6]
//     },
//     {
//         name: 'jsei', 
//         notes: [19, 18, 15, 16]
//     },
    
// ]


// const moyenne = (notes) => {
//     let somme = 0 
//     for (let note of notes){
//         somme = somme + note
//     }
//     return somme / notes.length
// }

// for ( let student of students){
//     student.moyenne = moyenne(student.notes)
    
// }

// console.log(students)












// function palymdrome(word){
//     const reverseWord = word
//     .split('')
//     .reverse()
//     .join()
//     return word.toUpperCase() === reverseWord
    
// }



// const words = {
//     kayak : true, 
//     SOS : true, 
//     Kayak : true, 
//     Bonjour: false,
// }

// for (let word in words){
//     if (palymdrome(word) !== words[word]){
//         console.error(`palydrome(${word}) aurait du etre true`)
//     }
// }









// reverse() : inverser un tableau 
// split() : rendre une chaine de caractère en tableau 
// join(): joindre les caractères 










// function getRandom(max){
//     return Math.floor(Math.random()*max)
// }
// const solution = getRandom(11)
// console.log(solution)

// function isRight(n){
//     return solution === n
// }
// function guess(){
//     const number = prompt('votre nombre ?') * 1
//     return isRight(number)
// }

// for (i=0; i < 3; i++){
//     if (guess()){
//         console.log('bravo')
//         break;
//     }else if (i === 2){
//         console.log('perdu')
//     }
// }













// const isPair = function (a, fn){
//     if (a % 2 === 0){
//         fn(a) 
//     }
// }


// isPair(4, function (n){
//     console.log(`mon nombre ${n} est pair`)
// })














// const somme = (a, b) => a + b 
// console.log(somme(1,22))













// const a = {
//     firstname: 'John',
//     lastname : 'beau',
//     fullname: function(){
//         console.log(`${this.firstname} ${this.lastname}`)
//     }
// }

// a.fullname()











// function greeting(name){
//     name = prompt('quelle est votre nom ?') 
//     console.log(`Bonjour ${name}`)
// }


// greeting();








// function canDrive(age, pays){
//     if (
//         (age >= 18 && pays === 'FR') || (age >= 16 && pays === 'US')
//     ){
//         return true
//     } return false
// }

// console.log(canDrive(18, 'FR'))








// function motifFlecheVersLeBas(n) {
//     if (n < 1) {
//         return "Plus grand mon vieux";
//     }

//     let motif = "";
//     for (let i = n; i >= 1; i--) {
//         motif += " ".repeat(n - i);

//         for (let j = 1; j <= i; j++) {
//             motif += j;
//         }

//         for (let j = i - 1; j >= 1; j--) {
//             motif += j;
//         }

//         motif += "\n";
//     }

//     return motif;
// }

// console.log(motifFlecheVersLeBas(0));
// console.log(motifFlecheVersLeBas(5));
// console.log(motifFlecheVersLeBas(11));
// console.log(motifFlecheVersLeBas(21));














// function IsPalindrome(str) {

// }


// console.log('salut'); 












  

/*$creneau = []; 

while (true) {

    $debut = (int)readline('heure ouverture ? '); 
    $fin = (int)readline('heure de fermeture'); 
    if ($debut > $fin) {
        echo ('heure de debut superieur de fin'); 
    }
}*/














/*
function findS($arr) {
    return min($arr);
}

$array1 = [34, 15, 88, 2];
echo findS($array1);  

$array2 = [34, -345, -1, 100];
echo findS($array2);*/





/*
$notes = [10, 4, 18, 9]; 
$eleves = ['cm2' => 'Jan',
            'cm1' => 'Jean'
            ]; 




foreach($eleves as $classe => $eleve){
    echo "$eleve est dans la classe $classe \n"; 
}
*/









/*switch ($action) {
    case 1: echo('je attaque'); 
    break; 
    case 2: echo('je defend'); 
    break; 
    case 3: echo('je pase'); 
    break; 
   default: echo('commande invalidess') ; 


}*/





/* if ($action === 1) {
    echo ('j\'attaque '); 
} elseif ($action === 2 )  {
    echo ('je defends'); 
} elseif ($action === 3 )  {
    echo ('je passe');
} else {echo('commande invalide'); } */