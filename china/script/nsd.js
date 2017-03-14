//функція яка превіряє чи всі поля заповнені корректно

function check()
{
	//отримуємо елементи для перевірки
	var pe = document.getElementById("p");
	var qe = document.getElementById("q");
	
	//поле де буде виводитися тип помилки
	var child = document.getElementById("error");
	

	//пепервіряємо чи є вільні клітинки або такі що рівні нулю
	if(pe.value == "" || qe.value == "")
	{
		error.innerHTML = "֍ There are free cells";
		child.style.color = "red";
		return false;
	}
	else if(pe.value <= 0 || qe.value <= 0)
	{
			error.innerHTML = "֍ There is ziro or less number";
			child.style.color = "red";
			return false;
	}


	//перевіряємо чи різниця між числами задовільняє умову
	if(parseInt(pe.value) > parseInt(qe.value))
	{
		if(parseInt((pe.value - qe.value)) < 2)
		{
			error.innerHTML = "֍ Too small differens between numbers (<2)"
			child.style.color = "red";
			return false;
		}
	}
	else if (qe.value > pe.value)
	{
		if((qe.value - pe.value) < 2)
		{
			error.innerHTML = "֍ Too small differens between numbers (<2)"
			child.style.color = "red";
			return false;
		}
	}



	//перевіряємо чи там є букви і символи
	var suma = 0;
	suma += parseInt(pe.value) + parseInt(qe.value);
	
	//якщо там є не цифра то сума буде рівна NaN
	if(isNaN(suma))
	{
		error.innerHTML = "֍ There is a letter";
		child.style.color = "red";
		//alert("there are letters!");
		return false;
	}


	//якщо все гаразд виводимо суму
	error.innerHTML = "֍ You filled okay";
	child.style.color = "green";

	return true;
}


//глобальні змінні, які будем виводити в останній функції
var p, q, nsd;

//реалізація наступного коду з коментарями дотупна на С++
//коментарями будуть помічені лише зміни
function nsd_diofant(a1, b1)
{
	//усі типи даних int замінені на var

	
	var tf;
	
	//об'являємо масив іншим чином
	var ar = [1,1,1,1,1,1,1,1,1,1,1,1,11];
	var br = [1,1,1,1,1,1,1,1,1,1,1,1,11];
	var cr = [1,1,1,1,1,1,1,1,1,1,1,1,11];
	var dr = [1,1,1,1,1,1,1,1,1,1,1,1,11];
	var pr = [1,1,1,1,1,1,1,1,1,1,1,1,11];
	

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

    	return 1; //змінено значення яке повертаєм для завершення роботи
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
	
}


//функція яку викликає користувач нажаттям на кнопку
function onlyNsd()
{
	//робимо перевірку на корректність вводу
	if(!check())
	{
		//якщо щось пішло не так то 
		//витираємо попередній результат
		res.innerHTML = "";
		fin_res.innerHTML = "";
		expression.innerHTML = "";
		nsd_nsd.innerHTML = "";
		nsd_p.innerHTML = "";
		nsd_q.innerHTML = "";
		return false;
	}
	
	//отримуємо значення з полів вводу	
	var a = parseInt(document.getElementById("p").value);
	var b = parseInt(document.getElementById("q").value);

	//викликаємо функцію для обчислення 
	nsd_diofant(a, b);

	//виводимо результат через глобальні змінні
	res.innerHTML = "Result here:";
	expression.innerHTML = a + "*p + " + b + "*q = " + nsd;
	nsd_nsd.innerHTML = "nsd = " + nsd;
	nsd_p.innerHTML = "p = " + parseInt(p);
	nsd_q.innerHTML = "q = " + parseInt(q);


	p = parseInt(p);
	q = parseInt(q);
	
	//Остаточна перевірка нашого рішення
	var res_child = document.getElementById("fin_res");
	if(parseInt((b*q + a*p)) == nsd)
	{
		fin_res.innerHTML = "֍ Expression made Okay";
		fin_res.style.color = "green";
	}
	else
	{
		fin_res.innerHTML = "֍ Something wrong, try another numbers";
		fin_res.style.color = "red";
	}

}


