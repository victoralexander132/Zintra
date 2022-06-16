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
	
	const credenciales = Object.fromEntries(new FormData(e.target));
	login(credenciales);
	} else {
		document.querySelector(".alert-danger").style.display = "block"
	}
});


/* Función para comprobar inicio de sesión */
const login = async (credenciales) => {
	const resp = await fetch('http://localhost:5000/login', {
				method: 'POST',
        body: JSON.stringify(credenciales),
        headers: {
            'Content-type': 'application/json'
        }
	})
	const token = resp.headers.get('Authorization');

	if (token && token.includes('Bearer') && resp.ok) {
		localStorage.setItem('token', token);
		localStorage.setItem('email', credenciales.email);
		url = window.location;
		const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);
		location.href = path + 'client.html';
	} else {
		localStorage.removeItem('token');
	}
}