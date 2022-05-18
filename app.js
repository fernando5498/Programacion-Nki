// Creacion de Usuario
function enviar() {
    let user = document.getElementById('user');
    let correo = document.getElementById('mail');
    let password = document.getElementById('password');
    let password2 = document.getElementById('password2');
    let error = document.getElementById('mensaje')
    error.style.color = "red"
    error.style.fontSize = ".8rem"

    let mensaje = []

    if (user.value === null || user.value === "") {
        user.style.backgroundColor = "#ff00001c";
        mensaje.push('Por Favor ingrese un usuario')
    } else {
        user.style.backgroundColor = "white";
    }

    if (correo.value === null || correo.value === "") {
        correo.style.backgroundColor = "#ff00001c";
        mensaje.push('no hay correo definido')
    } else {
        correo.style.backgroundColor = "white";
    }



    if (password.value === null || password.value === "") {
        password.style.backgroundColor = "#ff00001c";
        mensaje.push('por favor ingrese una contraseña')
    } else {
        password.style.backgroundColor = "white";
    }

    if (password2.value === null || password2.value === "" || password === password2) {
        password2.style.backgroundColor = "#ff00001c";
        mensaje.push('Contraseñas no coinciden')
    } else {
        password2.style.backgroundColor = "white";
    }

    if (user.value != "" && correo.value != "" && password.value != "" && password2.value != "" && password.value === password2.value) {
        mensaje.push('Registro Completado, Bienvenido')
    }

    error.innerHTML = mensaje
}