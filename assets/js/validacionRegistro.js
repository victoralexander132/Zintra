const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, 
    password: /^.{4,12}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/
}

const formulario = document.querySelector("form")
/* console.log(formulario); */
const inputs = document.querySelectorAll("#input")
/* console.log(inputs); */

const emailError = document.querySelector("#errorEmail")
const nombreError = document.querySelector("#errorNombre")
const passwordError = document.querySelector("#errorPassword")
const telefonoError = document.querySelector("#errorTelefono")

/* console.log(telefonoError); */

const statusInf = {
	nombre: false,
	email: false,
	password: false,
	telefono: false,
}


inputs.forEach((inp)=>{
	inp.addEventListener("keyup",(e) =>{
		switch(e.target.name){
            case "email":
				if(expresiones.email.test(e.target.value)){
					statusInf.email = true
					
					emailError.textContent = ""
				}
				else{
					statusInf.email = false
					
					emailError.textContent = "Error"
				}
			break
                case "nombre":
                    if(expresiones.nombre.test(e.target.value)){
                        statusInf.nombre = true
                        
                        nombreError.textContent = ""
                    }
                    else{
                        statusInf.nombre = false
                        
                        nombreError.textContent = "Error"
                        
                    }    
				break
			case "password":
				if(expresiones.password.test(e.target.value)){
					statusInf.password = true
					
					passwordError.textContent = ""
                }
				else{
					statusInf.password = false
					
					passwordError.textContent = "Error "
				}

				break
			case "telefono":
				if(expresiones.telefono.test(e.target.value)){
					statusInf.telefono = true
					
					telefonoError.textContent = ""
				}
				else{
					statusInf.telefono = false 
					
					telefonoError.textContent = "Error"
				}

				break
			
			

		}

	})
	
})

formulario.addEventListener("submit", (e) =>{
		e.preventDefault();
		/* console.log(Objet.values(statusInf));
		console.log(Objet.values(statusInf).incluedes(false)); */
		const check = document.querySelector("#terminos").checked
		/* console.log(check); */
		if(!Objet.values(statusInf).incluedes(false) && check == true){
			/* console.log("Enviado"); */
			document.querySelector(".alert-danger").style.display = "none"
			const datos = Object.fromEntries(
				new FormData(e.target)
			)
			console.log(datos)
			formulario.resert()
	
		}
		else{
			/* console.log("No Enviado"); */
			document.querySelector(".alert-danger").style.display = "block"
		}
		
})