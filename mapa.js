//Función para cambiar el párrafo posterior al mapa interactivo para contener información sobre el primer punto.
function Punto1() {
	document.getElementById("Info").innerHTML = '<b>Incisivos</b> </span><br><br>Los incisivos son como una hoja afilada para cortar comida. Los ocupamos por ejemplo, para morder manzanas.';
	document.getElementById("Foto").src = "imagenes/mapa_interactivo/incisivo.jpg";
	document.getElementById("Info").scrollIntoView();
}

//Función para cambiar el párrafo posterior al mapa interactivo para contener información sobre el segundo punto.
function Punto2() {
	document.getElementById("Info").innerHTML = '<b>Caninos</b></span><br><br> Los caninos son fuertes, con puntas para triturar la comida. Por ejemplo, los utilizamos para triturar un pedazo de carne. ';
	document.getElementById("Foto").src = "imagenes/mapa_interactivo/canino.jpg";
	document.getElementById("Info").scrollIntoView();
}

//Función para cambiar el párrafo posterior al mapa interactivo para contener información sobre el tercer punto.
function Punto3() {
	document.getElementById("Info").innerHTML = '<b>Molares y premolares</b></span><br><br> Los molares son anchos y planos en la parte superior para aplastar y moler la comida. Los premolares tienen características tanto de los dientes caninos como de los molares. Por ejemplo, los ocupamos para moler frutos secos. ';
	document.getElementById("Foto").src = "imagenes/mapa_interactivo/molar.jpg";
	document.getElementById("Info").scrollIntoView();
}

//Función para cambiar el párrafo posterior al mapa interactivo para contener información sobre el cuarto punto.
function Punto4() {
	document.getElementById("Info").innerHTML = '<b>Cordales</b></span><br><br> Las cordales, también conocidas como “muelas del juicio”, son los terceros molares, superiores e inferiores, que están en la parte posterior de la boca. Cuando las cordales están sanas y en la posición correcta, generalmente no causan problemas.';
	document.getElementById("Foto").src = "imagenes/mapa_interactivo/cordal.jpg";
	document.getElementById("Info").scrollIntoView();
}