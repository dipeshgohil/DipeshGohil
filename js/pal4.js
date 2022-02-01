let text="";
function checkPalindrome(str) {

const len = string.length;
for (let i = 0; i < len / 2; i++) {

    if (string[i] !== string[len - 1 - i]) {
      return false ;
    }
}
return true;
}

const string = prompt('Enter a string: ');
text=checkPalindrome(String);
document.write(text);