const expresiones = {
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
}

const formulario = document.querySelector("form")
const inputs = document.querySelectorAll("input")

const emailError = document.querySelector("#errorEmail")
const passwordError = document.querySelector("#errorPassword")

const statusInf = {
	email: false,
	password: false,	
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
    
			case "password":
				if(expresiones.password.test(e.target.value)){
					statusInf.password = true
					
					passwordError.textContent = ""
                }
				else{
					statusInf.password = false
					
					passwordError.textContent = "Contraseña Incorrecta "
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
		document.querySelector(".alert-danger").style.display = "block"
	}
});