function ttt()
{
	var guyn,chap,barz;
	guyn=document.getElementById("col1").value;
	//alert(guyn);
	chap=document.getElementById("txt2").value;
	barz=document.getElementById("txt3").value;
	if(chap>=800)
	{
		alert("Նշված չափով բլոկ չենք կարող ստեղծել");
	}
	else
	{
	document.getElementById('dv1').style.width=chap;
	document.getElementById('dv1').style.height=barz;
	document.getElementById('dv1').style.backgroundColor=guyn;
	}
} 