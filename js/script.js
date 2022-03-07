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

function todas(){

    console.log("Estas son todas las chicas disponibles");
    Nparejas.forEach(parejas => {

        alert(parejas.nombre);
        console.log(parejas.nombre);
        alert
    });
}

function bebedoras(){

    const bebedoras = Nparejas.filter(pareja =>
    pareja.interes === "beber")
    console.log("La siguientes son bebedoras");

    bebedoras.forEach(parejas => {
            alert(parejas.nombre);
        console.log(parejas.nombre);

    });
}

function fumadoras(){

    const fumadoras = Nparejas.filter(pareja =>
    pareja.interes === "fumar")
    console.log("La siguientes son fumadoras");

    fumadoras.forEach(parejas => {
            alert(parejas.nombre);
        console.log(parejas.nombre);
        
    });
}