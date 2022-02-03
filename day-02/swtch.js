
/*
switch (key) {
    case value:
        
        break;
        
        default:
            break;
        }
        
*/
function getLetter(s) {
    let letter;
    // Write your code here
  switch (s[0]) {
    case 'a':
        return 'A';
        break;
    case 'b':
        return 'B';
        break;
    case 'h':
        return 'C';
        break;
    case 'n':
        return 'D';
        break;
        
    default:
        return 'D';
        break;
}
    return letter;
}