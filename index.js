// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized

// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'
 
function capitalizeFirstLetterOfEachWord(string){

    let newArray=string.split(` `);

    return newArray.map(el=>el[0].toUpperCase()+el.slice(1)).join(` `);
    
}
console.log(capitalizeFirstLetterOfEachWord('ayyoub belibel'))


// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 
function wordsThatIncludesE(array){

return array.filter(el=>el.includes(`e`)&&el[0]!==`e`);

}
console.log(wordsThatIncludesE(["ellen", "jane", "zigland", "pedestrian"] ))



// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears
function countOccurencesOfEachLetter(string){

    let obj={};

    for(letter of string){

        obj[letter]?obj[letter]++:obj[letter]=1;

    }

    return obj;
    
}
console.log(countOccurencesOfEachLetter(`asciiaske`))

// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }