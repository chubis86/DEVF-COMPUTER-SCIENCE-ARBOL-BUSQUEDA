console.log("////////////////////////////////////////////////");
//1.- Crear una función que encuentre el número más repetido en un array.
console.log("1.- Crear una función que encuentre el número más repetido en un array");
const arreglo = [];

//Creamos un arreglo con valores random del 1 al 10
for(let x =0; x<100; x++){
    arreglo.push(Math.floor(Math.random()*10+1));
}
arreglo.sort((a, b) => a - b );
console.log(arreglo);

//Creamos un multiarray que guarde el valor y el número de veces que se va repitiendo
const arreglo2 = [];
//1.- Obtenemos valor por valor del arreglo original
//2.- Checamos si existe en nuestro arreglo temporal; de no ser así lo agregamos con 1 en contador y si existe modificamos el contador +1
let bandera;
for(let x=0; x<arreglo.length; x++){
    bandera=false;
    for(let i=0; i<arreglo2.length; i++){
        if(arreglo[x]==arreglo2[i][0]){
            bandera=true;
            arreglo2[i][1]++;
        }
    }
    if(!bandera){
        arreglo2.push([arreglo[x], 1]);
    }   
}
//Arreglo sumado
console.log(arreglo2);



//Buscamos el valor que se haya repetido más veces
/* let temporal=0;
let repeticiones=0;
for(let j=0;j<arreglo2.length;j++){
    if(arreglo2[j][1]>repeticiones){
        temporal=arreglo2[j][0];
        repeticiones=arreglo2[j][1];
        
    }
} 
console.log("El valor que más se repite es: "+temporal);
*/

//Hay veces en que empatan en el número de veces que se repiten. Para esto, podemos dar otra pasada buscando los elementos que tengan el mismo número de repeticiones ó, para ahorrar memoria, podemos primero buscar el elemento con más repeticiones y luego imprimir aquellos elementos con ese número de repeticiones

//Obtenemos mayor número de repeticiones
let repeticiones=0;
for(let j=0;j<arreglo2.length;j++){
    if(arreglo2[j][1]>repeticiones){
        repeticiones=arreglo2[j][1];
    }
}

//Imprimimos los elementos con ese número de repeticiones
let salida="";
console.log("Los elementos más repetidos son: ");
for(let j=0;j<arreglo2.length;j++){
    if(arreglo2[j][1]==repeticiones){
        salida+=arreglo2[j][0]+" ";
    }
}
console.log(salida);


console.log("////////////////////////////////////////////////");
/////2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras.
console.log("2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras.");
const arreglo3 = [8,'e',7,2,'a','d','f',2,3,1,4,3];
console.log(arreglo3);
let letras=arreglo3.filter(elemento => typeof elemento=='string');
console.log(letras);

console.log("////////////////////////////////////////////////");
/////3.- Crear una función que busque el número más grande en un arreglo.
console.log("3.- Crear una función que busque el número más grande en un arreglo.");
//Creamos un arreglo con valores random del 1 al 10
const arreglo4= [];
for(let x =0; x<100; x++){
    arreglo4.push(Math.floor(Math.random()*100+1));
}
arreglo4.sort((a, b) => a - b );
console.log(arreglo4);

function valorAlto(arregloE3){
    let temporalE3=0;
    arregloE3.forEach((valor) => {
        if(valor>temporalE3){
            temporalE3=valor;
        }
        
    })
 
    return "El valor más alto es: "+temporalE3;

}

console.log(valorAlto(arreglo4));

console.log("////////////////////////////////////////////////");
/////4.- Crear una función que busque el número más pequeño en un arreglo.
console.log("3.- Crear una función que busque el número más grande en un arreglo.");
//Creamos un arreglo con valores random del 1 al 10
const arreglo5= [];
for(let x =0; x<100; x++){
    arreglo5.push(Math.floor(Math.random()*100+1));
}
arreglo5.sort((a, b) => a - b );
console.log(arreglo5);

function valorBajo(arregloE4){
    let temporalE4=100;
    arregloE4.forEach((valor) => { 
        if(valor<temporalE4){
            temporalE4=valor;
        }
        
    })
 
    return "El valor más bajo es: "+temporalE4;

}

console.log(valorBajo(arreglo5));


console.log("////////////////////////////////////////////////");
///Crear una clase llamada ``Contacto`` con los siguientes datos:
console.log("5.-Crear una clase llamada Contacto con los siguientes datos:\n-Nombre\n-Apellidos\n-Teléfono\nDespués crear una clase que sea ListaContactos la cual tendrá dos métodos:\n-Agregar un contacto.\n-Buscar un contacto por nombre.");

class Contacto{
    constructor(nombre, apellidos, telefono){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.telefono=telefono;
    }

    
}

const arregloLista=[];
class ListaContactos{
        
    agregar(nombre, apellidos, telefono){
        let contacto=new Contacto(nombre, apellidos, telefono);
        arregloLista.push(contacto);
    }

    buscar(nombre){
        let bandera=false;
        for(let i=0; i<arregloLista.length; i++){
            if(arregloLista[i].nombre==nombre){
                bandera=true;
            }
        }
        if(bandera){
            return "El nombre "+nombre+" se ha encontrado en la lista de contactos";
        }else{
            return "El nombre '"+nombre+"' no se ha encontrado en la lista de contactos";
        }
        //return arregloLista.find(contacto=>contacto.nombre=='nombre'); 
        //return arregloLista[0].nombre;
    }
}

let lista= new ListaContactos();
lista.agregar("a", "b", "c");
console.log(arregloLista);
console.log(lista.buscar('a'));