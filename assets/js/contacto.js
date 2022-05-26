
const expresiones ={
nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
asunto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
mensaje: /^[a-zA-ZÀ-ÿ\s]{1,500}$/,
}

const formularioContacto = document.querySelector("form")
//console.log(formularioContacto)

const inputsContacto = document.querySelectorAll("input")
const textareaContacto= document.querySelector("textarea")
//console.log(inputsContacto,textareaContacto)

//falta asignar ids en html
const nombreError = document.querySelector("#errorNombre") 
const emailError= document.querySelector("#errorEmail")
const asuntoError= document.querySelector("#errorAsunto")
const mensajeError= document.querySelector("#errorMensaje")

