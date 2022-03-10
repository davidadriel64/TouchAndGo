// App corazon
// primera entrega 

//------------------ CREAR parejas-----------------------//

class pareja {
    constructor (id, nombre, edad, biografia, interes, like){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.biografia = biografia;
        this.interes = interes;
        this.like = like;
    }
};

const Nparejas = [];
        Nparejas.push(new pareja("0", "Julia", "22", "soy muy intelectual, muy inteligente", "beber", "0"));
        Nparejas.push(new pareja("1", "Eliana", "18", "soy muy intelectual, muy inteligente", "beber", "1"));
        Nparejas.push(new pareja("2", "Pamela", "34", "soy muy intelectual, muy inteligente", "bailar", "1"));
        Nparejas.push(new pareja("3", "Vicky", "24", "soy muy intelectual, muy inteligente", "bailar", "0"));
        Nparejas.push(new pareja("4", "Tamara", "21", "soy muy intelectual, muy inteligente", "fumar", "1"));
        Nparejas.push(new pareja("5", "Naty", "29", "soy muy intelectual, muy inteligente", "fumar", "0"));

//------------------ CREAR funciones-----------------------//


          function limpiarHTML(){
            while(contenedorUL.firstChild){ //Mientras el contendor tenga un hijo
              contenedorUL.removeChild(contenedorUL.firstChild) //Removemos ese hijo
            }
          }

          function todas(){

            limpiarHTML(); //Antes de insertar nuevo contenido limpiamos el anterior

            Nparejas.forEach( persona => { //Recorrer el arreglo
                
                const li = document.createElement('li'); //Por cada elemento crear un li
                li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center my-2");
                li.textContent = `${persona.nombre} tiene ${persona.edad} años y le gusta ${persona.interes}.`; //Insertar contenido dentro del li
                contenedorUL.appendChild(li); //Insertar el li dentro del ul contenedor
              })
          }

          function bebedoras(){

            limpiarHTML(); //Antes de insertar nuevo contenido limpiamos el anterior

            const bebedoras = Nparejas.filter(pareja =>
              pareja.interes === "beber")
              
              bebedoras.forEach( persona => { //Recorrer el arreglo
                
                const li = document.createElement('li'); //Por cada elemento crear un li
                li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center my-2");
                li.textContent = `${persona.nombre} le gusta: ${persona.interes}.`; //Insertar contenido dentro del li
                contenedorUL.appendChild(li); //Insertar el li dentro del ul contenedor
              })
          }

            function fumadoras(){

                limpiarHTML(); //Antes de insertar nuevo contenido limpiamos el anterior

                const fumadoras = Nparejas.filter(pareja =>
                  pareja.interes === "fumar")
                  
                  fumadoras.forEach( persona => { //Recorrer el arreglo
                    
                    const li = document.createElement('li'); //Por cada elemento crear un li
                    li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center my-2");
                    li.textContent = `${persona.nombre} le gusta: ${persona.interes}.`; //Insertar contenido dentro del li
                    contenedorUL.appendChild(li); //Insertar el li dentro del ul contenedor
                  })
            }

//------------------ MOSTRAR parejas -----------------------//

      const contenedorUL = document.querySelector('#contenedor'); //ul que esta en el HTML

                  function insertarParejas(){
                    
                    limpiarHTML(); //Antes de insertar nuevo contenido limpiamos el anterior
                    
                    Nparejas.forEach( persona => { //Recorrer el arreglo
                      
                      const li = document.createElement('li'); //Por cada elemento crear un li
                      li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center my-2");
                      li.textContent = `${persona.nombre} tiene ${persona.edad} años y le gusta ${persona.interes}.`; //Insertar contenido dentro del li
                      contenedorUL.appendChild(li); //Insertar el li dentro del ul contenedor
                    })
                  }

      insertarParejas();