// primera entrega 

// -------------------- CONSTANTES DOM LOGIN Y VARIABLES ----------------------------//

const enviarDat = document.querySelector("#enviarDat");

//------------------ CREAR USUARIO -----------------------//

class usuario {
    constructor (email, nombre, contrasena){
        this.name = nombre;
        this.email = email;
        this.contrasena = contrasena;
    }
};

let nUsuario = new usuario("juan carlos", "juancarlos@demo.com", "Demo1234");

//------------------ VERIFICAR DATOS -----------------------//

enviarDat.addEventListener("click", function(){
    if (validarDatos()){
        verificarLogin();
    }else{
        Swal.fire(
            'Ingresaste algo?',
            'Parece que esta vacio',
            'question'
          )
    }       
});

//------------------ FUNCIONES DEL LOGIN -----------------------//

function verificarLogin (){
    const emailHtml = document.querySelector("#email");
    const contraHtml = document.querySelector("#contra");
    if (emailHtml.value == nUsuario.email || contraHtml.value == nUsuario.contrasena){
         
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            redireccionar()
            }
        })
        
        Toast.fire({
            icon: 'success',
            title: 'Datos correctos - ingresando a la app'
        })
        
     }else{
        Swal.fire(
            'algo esta mal',
            'Los datos no coinciden',
            'error'
          )
    } 
    
};

function redireccionar() {
    setTimeout("location.href='app/inicio.html'", 3000);
  }

function validarDatos(){
    const email = document.querySelector("#email");
    const contra = document.querySelector("#contra");
    if (email.value == "" || contra.value == "" ){
        return false        
            }else{
                 return true
                    } 
}