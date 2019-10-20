/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        var stringSplit = s.split("");
        var stringReverse = stringSplit.reverse();
        var stringJoin = stringReverse.join("");

        console.log(stringJoin);
    } catch (error) {
        console.log(error.message);
        console.log(s);
    }
}