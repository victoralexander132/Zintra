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
    
			case "contrasenia":
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

	const formData = Object.fromEntries(new FormData(e.target));
	sendInfo(formData);
	} else {
		document.querySelector(".alert-danger").style.display = "block"
	}
});

const sendInfo = async (formData) => {
	const request = await fetch('https://zintra-api.herokuapp.com/api/ClienteRegistro/login', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formData)
	});

	const respuesta = await request.json();
	if (respuesta == true) {
		alert("Inicio de sesión exitoso");
		window.location.href = "./index.html" 
	} else {
		alert("Datos incorrectos")
	}
}