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

//------------------ CREAR funciones-----------------------//


function mostrarPareja(){
  let i = JSON.parse(localStorage.getItem('indice'));
  
      if (Nparejas[i].visto === "false" ) {
       
            
            limpiarHTML()
            
            document.getElementById("nombre").innerHTML = Nparejas[i].nombre ;
            document.getElementById("edad").innerHTML = Nparejas[i].edad+" años" ;
            document.getElementById("bio").innerHTML = Nparejas[i].biografia ;
            document.getElementById("intereses").innerHTML = Nparejas[i].intereses ;
            document.getElementById("interesesDos").innerHTML = Nparejas[i].interesesDos ;
            document.getElementById("interesesTres").innerHTML = Nparejas[i].interesesTres ;

            let img = new Image();  
                img.src = Nparejas[i].img;
                img.style = 'width: 100%;';
                let box = document.getElementById('box');
                box.appendChild(img);
                
     //------------------ Fetch -----------------------//
                                          
                  const accesKey = ('YZ00UqAf0dtCEvUaRyhX5fIItOwtVcyjvaLYVJ3kayc');
                  const endPoint = 'https://api.unsplash.com/search/photos';

                  function numeroski(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min + 1) + min);
                  }

                  async function getImages(query){
                        

                        let response = await fetch(endPoint + '?query=' + query + 
                        '&client_id=' + accesKey);

                        let jsonResponse = await response.json();
                        let imagesList = await jsonResponse.results;
                      
                        function createImages(imagesList){
                          let data = numeroski(1,3);
                          
                          let imgn = new Image();  
                                  imgn.src = imagesList[data].urls.thumb;
                                  imgn.style = 'width: 100%;';
                                  let boxm = document.getElementById('boxm');
                                  boxm.appendChild(imgn);
                                  
                            }
                                  createImages(imagesList);
                                  
                    } 
                    limpiarHTMLmodal()
                    getImages("girl"); 
                    
        //------------------ Fin Fetch -----------------------//

                        
                } else{
                  limpiarHTMLtodo()
                  const h3 = document.createElement('h3');
                  h3.innerHTML = "Buscando tu pareja ideal...";
                  h3.style = "color:black; text-align: center;";
                  let imgn = new Image();  
                  imgn.src = "../../img/buscando.gif";
                  imgn.style = 'width: 100%;';
                  let fin = document.getElementById('fin');
                  fin.appendChild(h3);
                  fin.appendChild(imgn);

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
                html: 'HOY TENES UNA CITA',
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
        animar()
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
                html: 'COMPRA PREMIUM Y ENCONTRAS A TU PAREJA',
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
      function limpiarHTMLmodal(){
        while(boxm.firstChild){ //Mientras el contendor tenga un hijo
        boxm.removeChild(boxm.firstChild) //Removemos ese hijo
        }
   }
   function limpiarHTMLtodo(){
    while(fin.firstChild){ //Mientras el contendor tenga un hijo
      fin.removeChild(fin.firstChild)
    }
    while(chau.firstChild){ //Mientras el contendor tenga un hijo
      chau.removeChild(chau.firstChild) //Removemos ese hijo
    }
}


//------------------ MOSTRAR MATCH -----------------------//



          function animar(){
            
}


//------------------ ELIMINAR DATOS -----------------------//

          function eliminar(){
            location.href='../../index.html';
            localStorage.removeItem(indice);
            localStorage.removeItem(parejas);
            localStorage.removeItem(misLikes);
          
         }


 
