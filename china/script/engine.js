var quantity = 3;

//функція для додавання нових полів
function create()
{
	//витираємо мовідомлення про можливі помилки
	error_2.innerHTML = "";

	//створюємо поле для вводу 1 значення
	/*var child_p = document.createElement("input");
	child_p.type = "text";
	child_p.class = "numbers";
	child_p.name = "number";
	child_p.placeholder = "p" + quantity;*/

	if (quantity > 8)
	{
		var child = document.getElementById("error_2");
		child.style.color = "red";
		error_2.innerHTML = "֍ I can't add anymore rows";
		//alert("i cant to id");
		return false;

	}
	
	var parent = document.getElementById('formik_2');
	//parent.appendChild(child_p);
	var lin = document.createElement("hr");
	parent.appendChild(lin);

	//додаємо знак для розділення
	var lab_1 = document.createElement("label");
	var text = document.createTextNode(" X ≡ ");
	lab_1.appendChild(text);
	parent.appendChild(lab_1);


	//створюємо поле для вводу 2 значеня
	var child_b = document.createElement("input");
	child_b.type = "text";
	child_b.class = "numbers";
	child_b.name = "number";
	child_b.placeholder = "b" + quantity;

	parent.appendChild(child_b);


	//додаємо знак для розділення
	var lab_2 = document.createElement("label");
	text = document.createTextNode(" mod ");
	lab_2.appendChild(text);
	parent.appendChild(lab_2);

	//створюємо поле для вводу 3 значеня
	var child_c = document.createElement("input");
	child_c.type = "text";
	child_c.class = "numbers";
	child_c.name = "number";
	child_c.placeholder = "p" + quantity;

	parent.appendChild(child_c);


	//збільшуємо значення кількості рядків
	quantity++;
}


//функція для видалення останнього рядка
function del()
{
	//витираємо мовідомлення про можливі помилки
	error_2.innerHTML = "";

	//якщо менше 2 полів то ми не можем видалити
	if (quantity <= 3)
	{
		var child = document.getElementById("error_2");
		child.style.color = "red";
		error_2.innerHTML = "֍ I can't delete anymore rows";
		//alert("i cant to id");
		return false;

	}

	//отримуємо загальну кількісь полів на сторінці
	var child_i = document.getElementsByTagName("input");
	var len = child_i.length - 2 ;

	//видаляємо поля вводу
	var parent = document.getElementById('formik_2');
	parent.removeChild(child_i[len-- - 1]);
	parent.removeChild(child_i[len - 1]);

	//видаляємо долдаткові символи
	var child_l = document.getElementsByTagName("label");
	len = child_l.length - 2;
	parent.removeChild(child_l[len-- -1]);
	parent.removeChild(child_l[len - 1]);

	var child_lin = document.getElementsByTagName("hr");
	len = child_lin.length - 2;
	parent.removeChild(child_lin[len-1]);

	//зменшуємо кількість рядків
	quantity--;
}



//реалізація наступного коду з коментарями дотупна на С++
//коментарями будуть помічені лише зміни
var nsd, p, q;
function nsd_diofant(a1, b1)
{
	//усі типи даних int замінені на var

	//var p, q;
	var tf;
	
	//об'являємо масив іншим чином
	var ar = [];
	var br = [];
	var cr = [];
	var dr = [];
	var pr = [];
	

	var i = 1;
	cr[0] = 1;
	
    
	if(a1 > b1)
	{
		ar[1] = a1;
		br[1] = b1;
		tf = 1;
	}
	else 
	{
		ar[1] = b1;
		br[1] = a1;
		tf = 0;
	}
	

   
    if (ar[1] % br[1] === 0)
    {
    	nsd = br[1];
    	tf == 1 ? p = 1 : q = 1;
    	tf == 0 ? p = (ar[1] / br[1] -1)* -1 : q = (ar[1] / br[1] -1)* -1;

    	return nsd; //змінено значення яке повертаєм для завершення роботи
	}   
	else
	{
		for (; cr[i-1] != 0; )
	    {
	 	    cr[i] = ar[i] % br[i];
	 	    dr[i] = parseInt(ar[i] / br[i]) / (-1); //добавлено конвертор типу даних
		    ar[i+1] = br[i];
		    br[i+1] = cr[i];
		    i++;
	    }
	    nsd = cr[i - 2];
    }


    if((ar[1] % br[1]) == 1)
	    {
	    	tf == 1 ? p = 1 : p = (ar[1] / br[1]) / -1; 
	    	tf == 0 ? q = 1 : q = (ar[1] / br[1]) / -1;
	    	
		}
	    else
		{
			pr[1] = 1;
			pr[2] = dr[1];
		    dr[i-1]= 1;	

	        for (;i != 3; i--)	
	        {		
		        pr[i-2] = dr[i-1] + (dr[i-2] * dr[i-3]);
		        pr[i-3] = dr[i-2];	
		        dr[i-3] = pr[i-2];		
	        }
	        
	 
	        if(tf == 1)
	        {
			    p = pr[1];
	            q = pr[2];
	        }
	
	        else
	        {
		        p = pr[2];
        	    q = pr[1];
	        }
	    }
	return nsd; 	
}



//перевіряємо чи числа заповнені коректно згідно вимог теореми
function checkOnNsd()
{
	var amount = document.getElementsByTagName("input");
	var temp = amount.length - 2;
	var child = document.getElementById("error_2");

	var l_amo = 1;
	for( var i = 0; i < temp; i++)
	{
		if(parseInt(amount[i].value) >= parseInt(amount[++i].value))
		{
			error_2.innerHTML = "֍ Your b >= p in " + l_amo + " line";
			child.style.color = "red";
			return false;
		}
		l_amo++;
	}
	

	var in_p1, in_p, strt, res; 
	var a_row = 1;
	var b_row;
	//var b_row = 2;
	var end = (quantity*2)-2;
	strt = document.getElementsByTagName("input");
	for(var a = 1; a < end; a+=2)
	{
		b_row = a_row + 1;
		for(var b = a + 2; b < end; b+=2)
		{
			in_p1 = parseInt(strt[a].value);
			in_p = parseInt(strt[b]. value);
			nsd_diofant(in_p1, in_p);
			res = nsd;
			//alert(in_p1 + " in " + a_row + ", " + in_p + " in " + b_row);
			if(res > 1)
			{
				error_2.innerHTML = "֍ Your p are not 'Both primes' in " + a_row + " and " + b_row + " rows";
				child.style.color = "red";
				return false;
			}
			b_row++;
		}
		a_row++;
	}

	return true;
}


//функція яка превіряє чи всі поля заповнені
function check_2()
{
	var amount = document.getElementsByTagName("input");
	var temp = amount.length - 2; //віднімаємо кількість кнопок
	//alert(temp);

	var child = document.getElementById("error_2");
	//child.style.color = blue;

	//пепервіряємо чи є вільні клітинки або нулі
	for( var i = 0; i < temp; i++)
	{
		if (amount[i].value == "") 
		{ 
			//якщо так то завершуєм роботу
			error_2.innerHTML = "֍ There are free cells";
			child.style.color = "red";
			//alert("free field!");
			return false;
		}	
		if (amount[i].value == 0)
		{
			error_2.innerHTML = "֍ There is ziro in the cell";
			child.style.color = "red";
			//alert("there is ziro!");
			return false;
		}
	}


	//alert("it's ok with emptyness and zeros");

	//перевіряємо чи там є букви і символи
	var suma = 0;
	for(var a = 0; a < temp; a++)
	{
		suma = suma + parseInt(amount[a].value);
	}

	//якщо там є не цифра то сума буде рівна NaN
	if(isNaN(suma))
	{
		error_2.innerHTML = "֍ There is a letter";
		child.style.color = "red";
		//alert("there are letters!");
		return false;
	}


	//ще одна перевірка для чисел згідно теореми
	if (!checkOnNsd())
	{
		return false;
	}


	//якщо все гаразд виводимо суму
	error_2.innerHTML = "֍ You filled okay";
	child.style.color = "green";
	//alert("suma: " + suma);
	return true;
}



function finder()
{
	fin_res_2.innerHTML = "";
	var child = document.getElementsByTagName("pre");
	var child_len = child.length;
	var text;

	var parent = document.getElementById("result_2");
	for(var b = child_len - 1; b >= 0; b--)
	{
		parent.removeChild(child[b]);
	}



	if(!check_2())
	{
		return false;
	}

	var amount = document.getElementsByTagName("input");
	var len = amount.length - 2; //віднімаємо кількість кнопок
	var P = 1;
	for(var i = 1; i < len; i+=2)
	{
		P *= parseInt(amount[i].value);
	}

	child = document.createElement("pre");
	text = document.createTextNode("P = " + P);
	child.appendChild(text);
	parent.appendChild(child);

	//alert("P = " + P);

	//об'являємо масив іншим чином
	var m = [];
	var M = [];
	
	for(var i = 1, a = 0, c = 1; i < len; i+=2, a++, c++)
	{
		m[a] = parseInt(P / parseInt(amount[i].value));
		child = document.createElement("pre");
		text = document.createTextNode("m" + c + " = " + m[a]);
		child.appendChild(text);
		parent.appendChild(child);
	}


	for(var i = 1, a = 0, c = 1; i < len; i+=2, a++, c++)
	{
		var tmp_p = parseInt(amount[i].value);
		var tmp_m = parseInt(m[a]);
		//alert("m = " + tmp_m + ", p = " + tmp_p);

		nsd_diofant(tmp_m, tmp_p);
		var f_p = parseInt(p);
		while(f_p <= 0)
		{
			f_p += tmp_p;
		}

		M[a] = f_p;
		child = document.createElement("pre");
		text = document.createTextNode("M" + c + " = " + M[a]);
		child.appendChild(text);
		parent.appendChild(child);
		//alert(f_p);
	}

	var X = 0;

	for(var a = 0, i = 0; i < len; i += 2, a++)
	{
		var tmp_b = parseInt(amount[i].value);
		X += parseInt((M[a] * m[a] * tmp_b));
	}
	X %= P;

	child = document.createElement("pre");
	text = document.createTextNode("X = " + X);
	child.appendChild(text);
	parent.appendChild(child);
	
	//alert(X);


	
	for(var bb = 0, pp = 1; bb < len; bb += 2, pp += 2)
	{
		tmp_b = parseInt(amount[bb].value);
		tmp_p = parseInt(amount[pp].value);
		if(X%tmp_p != tmp_b)
		{
			fin_res_2.innerHTML = "֍ Something wrong, try another numbers";
			fin_res_2.style.color = "red";
			return false;
		}

		//alert("b = " + tmp_b + ", p = " + tmp_p);
	}
	
	fin_res_2.innerHTML = "֍ Expression made Okay";
	fin_res_2.style.color = "green";
	
	//alert(M);
	//alert(m);
	
}

