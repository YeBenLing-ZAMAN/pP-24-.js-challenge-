/*
problem link 
https://www.hackerrank.com/challenges/js10-loops/problem?isFullScreen=true

*/ 

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let  vowel = [];
    let conson  = [];
    for (let i= 0; i < s.length; i++){
        if(s[i]=='a' || s[i]=='e' || s[i]=='u' || s[i]=='i' || s[i]=='o'){
            vowel.push(s[i]);
        }else{
            conson.push(s[i]);
        }
    }
    for(let i=0; i<vowel.length; i++){
        console.log(vowel[i]);
    }
    for(let i=0; i<conson.length; i++){
        console.log(conson[i]);
    }
    
}