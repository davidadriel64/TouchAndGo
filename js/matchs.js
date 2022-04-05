// App corazon
// primera entrega 


//------------------ CREAR parejas-----------------------//

let Nparejas = JSON.parse(localStorage.getItem('parejas'));


matchs();

//------------------ MOSTRAR MATCH -----------------------//

function matchs() {
    let misLikes = JSON.parse(localStorage.getItem('misLikes'));
    if (Nparejas[2].like === misLikes[2].like) {
      document.getElementById("L").innerHTML = Nparejas[2].nombre ;
      document.getElementById("D").innerHTML = "Te dio like" ;
      let ok = document.getElementById("I");
      ok.setAttribute("src", Nparejas[2].img);

    } 
    if (misLikes[4].like == Nparejas[4].like) {
      document.getElementById("L2").innerHTML = Nparejas[4].nombre ;
      document.getElementById("D2").innerHTML = "Te dio like" ;
      let ok = document.getElementById("I2");
      ok.setAttribute("src", Nparejas[4].img);
    } 

    
  }