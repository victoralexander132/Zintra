const expresiones = {
	nombre: /^[a-zA-Z0-9\_\-]{4,16}$/, 
    password: /^.{4,12}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/
}

const formulario = document.querySelector("form")
const inputs = document.querySelectorAll("input")


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
					emailError.textContent = "Correo Electronico Incorrecto"
				    }
			    break
                case "nombre":
                    if(expresiones.nombre.test(e.target.value)){
                        statusInf.nombre = true
                        nombreError.textContent = ""
                    }
                    else{
                        statusInf.nombre = false
                        nombreError.textContent = "Usuario Incorrecto"
                        
                    }    
				break
			case "password":
				if(expresiones.password.test(e.target.value)){
					statusInf.password = true
					passwordError.textContent = ""
                }
				else{
					statusInf.password = false
					passwordError.textContent = "Contraseña Incorrecta"
				}
                break
			case "telefono":
				if(expresiones.telefono.test(e.target.value)){
					statusInf.telefono = true
					telefonoError.textContent = ""
				}
				else{
					statusInf.telefono = false 
					telefonoError.textContent = "Telefono Incorrecto"
				}

				break
		}

	})
	
})


formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if (Object.values(statusInf).every((value) => value === true)) {

	const datos = Object.fromEntries(new FormData(e.target));
	console.log(datos);
	} else {
		console.log('No enviado');
	}
});