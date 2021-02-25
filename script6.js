 function conversion (codon) {
 switch (codon) {
        case 'UCU':
        case 'UCC':
        case 'UCA':
        case 'UCG':
        case 'AGU':
        case 'AGC':
            return 'Serine';
        case 'CCU':
        case 'CCC':
        case 'CCA':
        case 'CCG':
          return 'Proline';
        case 'UUA':
        case 'UUG':
            return 'Leucine';
        case 'UUU':
        case 'UUC':
            return 'Phenylalanine';
        case 'CGU':
        case 'CGC':
        case 'CGA':
        case 'CGG':
        case 'AGA':
        case 'AGG':
            return 'Arginine';
        case 'UAU':
        case 'UAC':
            return 'Tyrosine';
        default:
          console.log("Cette entrée n'est pas reconnue");
          break;
      }; }

//CCG UCG UUG CGC UAC AGC
function decompose (arn){
    let arrArn = [];
    let long = arn.length;
    let i =0;

    while (i <= long){
        arrArn.push(arn.slice(i, i + 3));
        i = i + 3
    }
    console.log(arrArn)
    return arrArn
}

function decrypt (decode){
    let protein = decompose(decode);
    let arrProtein = []
    for (let i = 0; i < protein.length -1; i++){
        arrProtein.push(conversion(protein[i]));
    }
    console.log (`ARN à decoder : ${decode}, en ${arrProtein.join('-')}`)
}

decrypt("UUACGCAGUAGA");
decrypt("CCGUCGUUGCGCUACAGC");
decrypt("CCUCGCCGGUACUUCUCG");