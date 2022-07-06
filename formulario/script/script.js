let nombre, correo, mensaje;

let formulario = document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
    console.log('hola');
    e.preventDefault();
    LeerDatos()
})

function LeerDatos(){
    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    mensaje = document.querySelector('textarea').value;
    ValidarData(nombre, correo, mensaje)
    guardarlocarstorage(nombre, correo, mensaje)
}

function ValidarData(nombre, correo, mensaje){
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){
        swal("Good job!", "You clicked the button!", "error");
    }
}

function ValidarData(nombre, correo, mensaje){
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){
        alert('error')
        swal("Error de informacion", 
        "ups...", 
        "error");
    }
}

function guardarlocarstorage(nombre, correo, mensaje){
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('correo', correo);
    localStorage.setItem('mensaje', mensaje);
    listaData()
}

function listaData(){
    let nombreUs = localStorage.getItem('nombre');
    let correoUs = localStorage.getItem('correo');
    let mensajeUs = localStorage.getItem('mensaje');
    swal(nombre);
}