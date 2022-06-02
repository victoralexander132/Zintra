
const expresiones ={
nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
asunto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
mensaje: /^[a-z0-9_-]{20,500}$/,
}

const formularioContacto = document.querySelector("form")
//console.log(formularioContacto)

const inputsContacto = document.querySelectorAll("input", "textarea")
const textareaContacto= document.querySelector("textarea")
console.log(inputsContacto, textareaContacto)


const nombreError = document.querySelector("#errorNombre") 
const emailError= document.querySelector("#errorEmail")
const asuntoError= document.querySelector("#errorAsunto")
const mensajeError= document.querySelector("#errorMensaje") 
console.log(nombreError, emailError, asuntoError, mensajeError)


const statusInf = {
    nombre: false,
    email: false,
    asunto: false,
    mensaje: false
}

inputsContacto.forEach((inp)=>{
	//console.log(inp);
	inp.addEventListener("keyup",(e)=>{
		/* console.log(e.target.name) */

		switch(e.target.name){
		case "nombre":
			/* console.log(e.target.value); */
			if(expresiones.nombre.test(e.target.value)){
				statusInf.nombre=true;
				nombreError.textContent=""
			}
			else{
				statusInf.nombre=false,
				nombreError.textContent="Nombre incorrecto"
			}			
			break
		case "email":
			if(expresiones.email.test(e.target.value)){
				statusInf.email=true;
				emailError.textContent=""
			}
			else{
				statusInf.email=false;
				emailError.textContent="E-mail incorrecto"
			}
			break
		case "asunto":
            console.log(e.target.value);
			if(expresiones.asunto.test(e.target.value)){
				statusInf.asunto=true;
				asuntoError.textContent=""
			}
			else{
				statusInf.asunto=false;
				asuntoError.textContent="Por favor escribe un asunto"
			}
			break
        case "mensaje":
			console.log(e.target.value);
		/* 	if(expresiones.mensaje.test(e.target.)){
				statusInf.mensaje=true;
				mensajeError.textContent=""
			}
			else{
				statusInf.mensaje=false,
				mensajeError.textContent="Por favor escribe tu mensaje"
			} */
            break
            }   
            
	})
})

textareaContacto.addEventListener("input",(e)=>{
    console.log(e.target.value)
    if(e.target.value !=""){
        statusInf.mensaje=true;
        mensajeError.textContent=""
    }
    else{
        statusInf.mensaje=false,
        mensajeError.textContent="Por favor escribe tu mensaje"
    }    
})


formularioContacto.addEventListener("submit",(e)=>{
	e.preventDefault();
    console.log(Object.values(statusInf));
	//console.log(Object.values(statusInf).includes(false));
	if(!(Object.values(statusInf).includes(false))){
    	alert("Enviado") 
		
		const datos = Object.fromEntries(
			new FormData(e.target)
		)
		console.log(datos)
		formularioContacto.reset()
            
        statusInf.nombre=false 
        statusInf.email=false
        statusInf.asunto= false
        statusInf.mensaje=false

    }
})

