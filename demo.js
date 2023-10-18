function motifFlecheVersLeBas(n) {
    if (n < 1) {
        return "Plus grand mon vieux";
    }

    let motif = "";
    for (let i = n; i >= 1; i--) {
        motif += " ".repeat(n - i);

        for (let j = 1; j <= i; j++) {
            motif += j;
        }

        for (let j = i - 1; j >= 1; j--) {
            motif += j;
        }

        motif += "\n";
    }

    return motif;
}

console.log(motifFlecheVersLeBas(0));
console.log(motifFlecheVersLeBas(5));
console.log(motifFlecheVersLeBas(11));
console.log(motifFlecheVersLeBas(21));














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