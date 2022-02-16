// starting consonants flipped to end of word& ay added
const translate = require('./pigLatin');

//change test descriptions 
//At least 5 test for words starting w/ different vowels
describe('translate', () => {
    test ('word apple has two vowels and adds way  ', () => {
        expect (translate('apple')).toEqual('appleway'); 
    });
    test ('else ends and begins with a vowel so adds way', () => {
        expect (translate('else')).toEqual('elseway'); 
    });
    test ('orange ends and begins with a vowel so adds way', () => {
        expect (translate('orange')).toEqual('orangeway'); 
    });
    test ('itchy ends and begins with a vowels so adds way', () => {
        expect (translate('itchy')).toEqual('itchyway'); 
    });
    test ('umbrella ends and begins with a vowel so adds way', () => {
        expect (translate('umbrella')).toEqual('umbrellaway'); 
    });

    //At least 2 test for words starting w/ one consonant
    test ('giraffe starts with a consoanant and ends with a vowel so it will move the first letter to the end and add ay', () => {
        expect (translate('giraffe')).toEqual('iraffegay'); 
    });
    test ('love begins with a consonant and ends with a vowel so it will move the first letter to the end and add ay', () => {
        expect (translate('love')).toEqual('ovelay'); 
    });
    // At least 1 test for words starting w/ 2 consonants
    test ('shade starts with two consonants so it will move those letters to the end and add ay', () => {
        expect (translate('shade')).toEqual('adeshay'); 
    });
    // At least 1 test for words starting w/ 3 consonants
    test ('string as three consonants to it will move the first 3 letters to the end and add ay', () => {
        expect (translate('string')).toEqual('ingstray'); 
    });
    //At least 1 test checking for lower case conversion
    test(' check for lower case conversion', () => {
        expect (translate("word")).toEqual(lowerCaseStr);
    });
    
});