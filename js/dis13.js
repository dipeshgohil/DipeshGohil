
   function replacingConsonants(s)
   {
       var nVowel = "aaaeeeeiiiiioooooouuuuuuuu";
       for (var i = 0; i < s.length; i++)
           s[i] = nVowel[s[i].charCodeAt(0) - 'a'.charCodeAt(0)];
       return s.join('');
   }
    
   // Driver code
   var s = prompt("enter a message").split('');
   document.write( replacingConsonants(s));