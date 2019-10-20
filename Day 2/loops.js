/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < s.length; i++) {
        if (vowels.includes(s[i]) == true) {
            console.log(s[i]);
        }
    }

    for (var j = 0; j < s.length; j++) {
        if (vowels.includes(s[j]) == false) {
            console.log(s[j]);
        }
    }
}