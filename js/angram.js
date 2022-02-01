	function ang(str1,str2)
	{
		let n1 = str1.length;
		let n2 = str2.length;

		if (n1 != n2)
			return false;

		str1.sort();
		str2.sort()

		for (let i = 0; i < n1; i++)
			if (str1[i] != str2[i])
				return false;

		return true;
	}
	let str1=['a','a','b'];
	let str2=['a','b','a'];
    let x=ang(str1,str2);
    document.write('1."aab" & "aba:"<br>',x);
    
	 str1=['a','a','b'];
	 str2=['a','b','b'];
    x=ang(str1,str2);
    document.write('<br>1."aab" & "abb:"<br>',x);

