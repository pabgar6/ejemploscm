//función para cambiar los estilos de nuestra página web
function cambiarArchivoCss(archivo) {
document.getElementById("estilo").href=archivo;
}
//función que cambiará el estilo del elemento identificado por "header"
//en la página web
function myFunctiondemo() {
 var x = document.getElementById("header");
 x.style.fontSize = "25px";
 x.style.color = "red";
}
//función que cambiará el estilo del elemento identificado por "header"
//en la página web
function myFunctiondemo1() {
 var x = document.getElementById("header");
 x.style.fontSize = "20px";
 x.style.color = "black";
}
//función que abre una ventana de alerta con el título "Hola Clase!"
function myFunctionalert() {
 alert("Hola Clase!");
}
//función que mostrará un mensaje a los 5 segundos de...
function Bienvenido(){
setTimeout("alert('Bienvenido a esta página, este mensaje ha salido a los 5 segundos');",5000);
}
//función que visualizará un mensaje, seguirá el mensaje mientras se quiera cerrar y no
//se introduzca algo
function myFunction2() {
 var x=document.getElementById("nombre");
 var person=null;
 while (person==null)
 {
 person = window.prompt("Introduce tu nombre", "Nombre Apellidos");
 if (person != null)
 {
 x.innerHTML="Hola " + person + "! Cómo estás hoy?";
 }
 }
}