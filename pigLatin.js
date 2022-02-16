let translate = ('.pigLatin');


function translate(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "way";
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return newStr;
    }
}

const lowercase =(str) => {
    const lowerCaseStr = str.toLowerCase();
    if(lowerCaseStr[i] === 'a' ||
        lowerCaseStr[i] === 'e' ||
        lowerCaseStr[i] === 'i' ||
        lowerCaseStr[i] === 'o' ||
        lowerCaseStr[i] === 'u' ||)
});    

    
            
    



module.exports = translate;









/*const letters = ["a, e, i, o, u"];
let vowels = "";

function translate() {
    if (translate === startsWith("a, e, i, o, u") && endsWith("a, e, i, o, u"))
        return translate.push("way") 
    else if (translate === )



    
}*/

