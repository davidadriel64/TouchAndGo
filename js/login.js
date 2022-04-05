// primera entrega 


//------------------ CREAR datos app -----------------------//

const indice = 0;
const parejas = [
    { 'id':0,'img':'../../img/mujer0.jpg','nombre':'Julia','edad':44,'biografia':'Ser feliz no significa tener una vida perfecta, sino saber reconocer la belleza y el valor de todas las imperfecciones','intereses':'beber','interesesDos':'Bailar','interesesTres':'Tu Corazon bebe','like':0,'visto':'false' },
    { 'id':1,'img':'../../img/mujer1.jpg','nombre':'Pamela','edad':33,'biografia':'Abre tus brazos al cambio, pero no dejes de lado tus valores','intereses':'Fumar','interesesDos':'Parlotear','interesesTres':'Cantar','like':0,'visto':'false' },
    { 'id':2,'img':'../../img/mujer2.jpg','nombre':'jeny','edad':43,'biografia':'La única persona que necesitas en tu vida, es aquella que te demuestre que te necesita en la suya','intereses':'Marihuana','interesesDos':'Trekking','interesesTres':'Escalar lo que pinte','like':1,'visto':'false' },
    { 'id':3,'img':'../../img/mujer3.jpg','nombre':'La diana','edad':22,'biografia':'Una actitud positiva puede hacer sueños realidad','intereses':'bailar','interesesDos':'Salir a tomar algo','interesesTres':'Que me aten','like':0,'visto':'false' },
    { 'id':4,'img':'../../img/mujer4.jpg','nombre':'Tu turrita','edad':23,'biografia':'Hee rEsscateense Loqoo ,, Qee omdaa ? Se viene a hacEr Loos qAAretas aqaa ! Tomense el re paaLo, Deejen de boqiArrr','intereses':'Correr','interesesDos':'Tu vishusha','interesesTres':'Tenes hora?','like':1,'visto':'false' },
    { 'id':5,'img':'../../img/mujer5.jpg','nombre':'Cristina','edad':26,'biografia':'Y cuanto más intensamente ames, más intenso será el dolor futuro','intereses':'Ser intensa','interesesDos':'Mirarte fijo','interesesTres':'Contestame rapido','like':0,'visto':'false' },
    { 'id':6,'visto':'true' },
 
];
const misLikes = [
    { 'id':0,'like':0},
    { 'id':1,'like':0},
    { 'id':2,'like':0},
    { 'id':3,'like':0},
    { 'id':4,'like':0},
    { 'id':5,'like':0},
  ];
  
    localStorage.setItem('parejas', JSON.stringify(parejas));
    localStorage.setItem('indice', JSON.stringify(indice));
    localStorage.setItem('misLikes', JSON.stringify(misLikes));
  
// -------------------- CONSTANTES DOM LOGIN Y VARIABLES ----------------------------//

const enviarDat = document.querySelector("#enviarDat");

//------------------ CREAR USUARIO -----------------------//

class usuario {
    constructor (nombre, email, contrasena){
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
    let emailHtml = document.querySelector("#email");
    let contraHtml = document.querySelector("#contra");
    
    console.log(emailHtml.value,nUsuario.email,contraHtml.value,nUsuario.contrasena);

    if (emailHtml.value === nUsuario.email && contraHtml.value === nUsuario.contrasena){
         
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
    const data = (email.value == "" || contra.value == "" ) ? false : true ; return data
}