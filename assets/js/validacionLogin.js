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