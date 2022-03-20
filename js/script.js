// App corazon
// primera entrega 


//------------------ CREAR parejas-----------------------//

let Nparejas = JSON.parse(localStorage.getItem('parejas'));

//------------------ mostrar parejas-----------------------//

mostrarPareja();

//------------------ CREAR EVENTOS-----------------------//

document.getElementById("like").addEventListener("click", like);
document.getElementById("volver").addEventListener("click", volver);
document.getElementById("disLike").addEventListener("click", disLike);
document.getElementById("salir").addEventListener("click", eliminar);

//------------------ CREAR funciones-----------------------//


function mostrarPareja(){
  let i = JSON.parse(localStorage.getItem('indice'));
  
      if (Nparejas[i].visto === "false") {
          limpiarHTML()
            document.getElementById("nombre").innerHTML = Nparejas[i].nombre ;
            document.getElementById("edad").innerHTML = Nparejas[i].edad+" años" ;
            document.getElementById("bio").innerHTML = Nparejas[i].biografia ;
            document.getElementById("intereses").innerHTML = Nparejas[i].intereses ;

            let img = new Image();  
                img.src = Nparejas[i].img;
                img.style = 'width: 100%;';
                var box = document.getElementById('box');
                box.appendChild(img);
                } 
         
      }

      function like(){
        let i = JSON.parse(localStorage.getItem('indice'));
        Nparejas[i].visto = "true";
        localStorage.setItem('parejas', JSON.stringify(Nparejas));

        let misLikes = JSON.parse(localStorage.getItem('misLikes'));
        misLikes[i].like = 1;

        localStorage.setItem('misLikes', JSON.stringify(misLikes));
        i = i+1;
        localStorage.setItem('indice', JSON.stringify(i));

        if (Nparejas[i].like === misLikes[i].like) {
          let timerInterval
              Swal.fire({
                title: 'MATCH!!!!',
                html: 'HOY LA PONES',
                timer: 5000,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading()
                  const b = Swal.getHtmlContainer().querySelector('b')
                  timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                  }, 100)
                },
                willClose: () => {
                  clearInterval(timerInterval)
                }
              }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                  console.log('I was closed by the timer')
                }
              })
        }
        
        mostrarPareja()


      }
      
      function disLike(){
        let i = JSON.parse(localStorage.getItem('indice'));
        Nparejas[i].visto = "true";
        localStorage.setItem('parejas', JSON.stringify(Nparejas));

        let misLikes = JSON.parse(localStorage.getItem('misLikes'));
        misLikes[i].like = 0;

        localStorage.setItem('misLikes', JSON.stringify(misLikes));
        i = i+1;
        localStorage.setItem('indice', JSON.stringify(i));

        if (Nparejas[i].like === 1) {
          let timerInterval
              Swal.fire({
                title: ' TE PERDISTE UN MATCH!!!!',
                html: 'COMPRA PREMIUM Y HOY LA PONES',
                timer: 4000,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading()
                  const b = Swal.getHtmlContainer().querySelector('b')
                  timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                  }, 100)
                },
                willClose: () => {
                  clearInterval(timerInterval)
                }
              }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                  console.log('I was closed by the timer')
                }
              })
        }
        
        mostrarPareja()

      }

      function volver(){
        Swal.fire(
          'Banca la toma!',
          'Primero compra el premium ratata',
          'danger'
        )
      }

      function limpiarHTML(){
           while(box.firstChild){ //Mientras el contendor tenga un hijo
           box.removeChild(box.firstChild) //Removemos ese hijo
           }
      }


//------------------ MOSTRAR MATCH -----------------------//



          const contenedor = document.querySelector('#match'); //ul que esta en el HTML

          function finParejas(){
          
            limpiarHTML(); //Antes de insertar nuevo contenido limpiamos el anterior
             
            const img = document.createElement('img'); //Por cada elemento crear un li
             img.setAttribute("style", "border: 5px solid #fff;");
             img.setAttribute("scr", "https://us.123rf.com/450wm/asjack/asjack1601/asjack160100103/50573933-hombre-apuesto-joven-elegante-con-gafas-y-wathers-.jpg?ver=6");
           
            img.textContent = ``; //Insertar contenido dentro del li
             contenedor.appendChild(img); //Insertar el li dentro del ul contenedor
            
         }


//------------------ ELIMINAR DATOS -----------------------//

          function eliminar(){
            redireccionar()
            localStorage.removeItem(indice);
            localStorage.removeItem(parejas);
            localStorage.removeItem(misLikes);
          
         }

         function redireccionar() {
          setTimeout("location.href='../../index.html'", 1000);
        }


        