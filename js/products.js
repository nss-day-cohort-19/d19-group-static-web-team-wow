console.log("i am here");



var products = [{name:"funda1",description:"test1",price:"20",url:"images/charger.jpeg"},
				{name:"funda2",description:"test2",price:"20",url:"images/charger.jpeg"},
				{name:"funda3",description:"test3",price:"20",url:"images/charger.jpeg"},
				{name:"funda4",description:"test4",price:"20",url:"images/charger.jpeg"},
				{name:"funda5",description:"test5",price:"20",url:"images/charger.jpeg"},
				{name:"funda6",description:"test6",price:"20",url:"images/charger.jpeg"},
				{name:"funda7",description:"test7",price:"20",url:"images/charger.jpeg"},
				{name:"funda8",description:"test8",price:"20",url:"images/charger.jpeg"},
				{name:"funda9",description:"test9",price:"20",url:"images/charger.jpeg"}

];




productsText="";

for (var i = 0; i < products.length; i++){
	// jediText += jedi[i] + " is a <strong>Jedi</strong>. <br>";

	productsText += `<img src="${products[i].url}" height='200' width='200'>`;
	if (i===2 || i===5){
		productsText += "<br>";
	}
}

document.getElementById("demo").innerHTML = productsText;


//console.log(products[0].name); 