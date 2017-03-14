function toNsd()
{
	
	var nsd_child = document.getElementById("only_nsd");
	nsd_child.style.display = "block";

	var full_child = document.getElementById("nsd_full")
	full_child.style.display = "none";

	var btn_1 = document.getElementById("s1");
	var btn_2 = document.getElementById("s2");

	btn_1.style.backgroundColor = "black";
	btn_1.style.color = "white";

	btn_2.style.backgroundColor = "lightgray";
	btn_2.style.color = "black";
}

function toCh()
{
	var nsd_child = document.getElementById("only_nsd");
	nsd_child.style.display = "none";

	var full_child = document.getElementById("nsd_full")
	full_child.style.display = "block";


	var btn_1 = document.getElementById("s1");
	var btn_2 = document.getElementById("s2");

	btn_2.style.backgroundColor = "black";
	btn_2.style.color = "white";

	btn_1.style.backgroundColor = "lightgray";
	btn_1.style.color = "black";
	
}