console.log("i am here");



var products = [{name:"Broken Apple charger ",description:" A broken charger for most Apple products.",price:"$24.99",url:"images/charger.jpeg"},
				{name:"Broken Change Pot",description:" Still capable to hold change (change not included) ",price:"$10.99 ",url:"images/brokenpot.jpeg"},
				{name:"Broken Glass. ",description:"It may be broken but you can still drink from it, if you're into that ",price:" $4.99",url:"images/brokenglass.jpeg"},
				{name:"Broken Phone. ",description:"Have fun trying to put that together ",price:" $15.00",url:"images/brokephone.jpeg"},
				{name:"Broken wine glass. ",description:" A once usable tool for drinking wine, now a stabbing utensile. ",price:" $8.99",url:"images/brokenwine.jpeg"},
				{name:"Chipped bowl. ",description:" Fully functional bowl now in a chipped fashion. ",price:" $20.00",url:"images/chippedbowl.jpeg"},
				{name:"Broke Microphone. ",description:" Make it look like you once rocked the house! ",price:" $19.99",url:"images/brokemic.png"},
				{name:"Superman Action Figure. ",description:"The man of steel, now the man of many parts. ",price:" $5.00",url:"images/superman.jpeg"},
				{name:"Broken Plate. ",description:" Not a bad item, could still be used. ",price:" $10.00",url:"images/brokeplate.jpeg"}

];




var productsText="<ul>";

for (var i = 0; i < products.length; i++){
	// jediText += jedi[i] + " is a <strong>Jedi</strong>. <br>";

	productsText += `<img src="${products[i].url}" height='200' width='200'>`;
	productsText += `<li>${products[i].name}`;
	productsText += `${products[i].description}`;
	productsText += `${products[i].price}</li>`;
	if (i===2 || i===5){
		productsText += "<br>";
	}
}
document.getElementById("demo").innerHTML = productsText;




//console.log(products[0].name); 