
			var nombre = document.getElementById('name')
			var email = document.getElementById('mail')
			var mensaje = document.getElementById('msg')

			function validardatos () {
			nombre.addEventListener ("input" , corroborarNombre)
			email.addEventListener ("input" , corroborarEmail)
			mensaje.addEventListener ("input" , corroborarMensaje)

			corroborarNombre ()
			corroborarEmail ()
			corroborarMensaje ()

}

			function corroborarNombre () {
			if (nombre.value=='') {
			nombre.setCustomValidity ("Ingrese su nombre")
			} else {
			nombre.setCustomValidity ('')
				}
			}

			function corroborarEmail () {
				if (email.value=='') {
					email.setCustomValidity ("Ingrese su mail")
				} else {
					email.setCustomValidity ('')
				}
			}

			function corroborarMensaje () {
				if (mensaje.value=='') {
				mensaje.setCustomValidity ("Ingrese su mensaje")
				} else {
				mensaje.setCustomValidity ('')
				}
}
			window.addEventListener ("load", validardatos)
	


	/* -------- ELECCION DE UNIDADES ---------- */

	function iniciar () {
	var boton = document.getElementById('grabar')
	boton.addEventListener ('click', nuevoItem, false)
	mostrar()
}


function nuevoItem () {
	var clave = document.getElementById('clave').value
	var referencia = document.getElementById('referencia').value
	var categoria = document.getElementById('categorias').value
	var fecha = document.getElementById('fecha').value
	var ambientes = document.getElementById('ambientes').value

	var valores = [fecha  ,   categoria  ,   ambientes  ,   referencia]


	localStorage.setItem(clave, valores)
	mostrar ()
}

function mostrar () {
	var cajadatos = document.getElementById('cajadatos')
	
	cajadatos.innerHTML='<div class="uni"><button class="eliminar" onclick="eliminar_Todo ()"><img src="https://img.icons8.com/small/16/000000/delete.png">Eliminar Todo</button></div>'

	for (var i=0; i<localStorage.length; i++) {
		var id = localStorage.key(i)
		var valor = localStorage.getItem(id)

		cajadatos.innerHTML+='<div class="uni">'+id+' - &nbsp '+valor+'</br><button class="eliminar" onclick="Eliminar_Item (\''+id+'\')"><img src="https://img.icons8.com/small/16/000000/delete.png">Eliminar Cita</buton></div>'
	
	}
}



function eliminar_Todo () {
  if(confirm ('Desea eliminar todas las unidades guardadas?')) {
  	localStorage.clear ()
  	mostrar ()
  }
}

function Eliminar_Item (clave) {
	if (confirm ('Desea eliminar la unidad seleccionada?')) {
		localStorage.removeItem (clave)
		mostrar ()
	}
}

 	window.addEventListener ('load', iniciar, false)



/*--------------------CANVAS--------------------------------*/


	var posX;
	var can;
	var contexto;
	var direccion;
    
	window.onload = function dibujar () {
    
    can = document.getElementById("lienzo");
    lienzo = can.getContext("2d");
    posX=15;
    direccion = 0;
    setInterval("dibujar()",2);
}


function dibujar() {
    if (direccion == 0)
	posX++;
    else
	posX--;
	
    if (posX==350) {
	direccion = 1;
    }
    if (posX==50) {
	direccion = 0;
    }
    
    can.width = can.width; // limpia el canvas
    
    lienzo.font="bold 24px verdana, sans-serif";
	lienzo.fillStyle = 'white';
	lienzo.textAlign="start";
	lienzo.fillText("Estilo Arquitectura", 50,50);
    
    
}










/*--------------------- CONTROLES DE VIDEO ------------- */



var video = document.getElementById('video1')

function reproducir () {
	
	var boton_reproducir = document.getElementById('reproducir')
	
	if (video.paused) {
		video.play()
		boton_reproducir.innerHTML='<img src="https://img.icons8.com/ios/16/000000/pause.png">'
		} 
		else {
		video.pause()
		boton_reproducir.innerHTML='<img src="https://img.icons8.com/small/16/000000/play.png">'
	}
}

 
 function reiniciar () {
	
	video.currentTime=0
 	video.pause()
 	boton_reproducir.innerHTML='<img src="https://img.icons8.com/small/16/000000/play.png">'
 }


 function saltar (value) {
 	video.currentTime+=value
 }

/*--------VIDEO 2 -------------------------*/

var video1 = document.getElementById('video2')

function reproducir1 () {
	
	var boton_reproducir1 = document.getElementById('reproducir1')
	
	if (video1.paused) {
		video1.play()
		boton_reproducir1.innerHTML='<img src="https://img.icons8.com/material-two-tone/24/000000/pause-squared.png">'
		} 
		else {
		video1.pause()
		boton_reproducir1.innerHTML='<img src="https://img.icons8.com/material-two-tone/24/000000/play-button-circled.png">'
	}
}

 
 function reiniciar1 () {
	
	video1.currentTime=0
 	video1.pause()
 	boton_reproducir1.innerHTML='<img src="https://img.icons8.com/material-two-tone/24/000000/play-button-circled.png">'
 }


 function saltar1 (value) {
 	video1.currentTime+=value
 }



