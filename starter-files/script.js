// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

function ejecutarApi()
{
    let api = fetch('https://yesno.wtf/api').
    then(respuesta => respuesta.json()).then((datos)=>mostrarinformacion(datos));


}

function mostrarinformacion(datos){
    console.log(datos.answer);
    let posicion = document.getElementById("revisar");
    let h1 = document.createElement("h1");
    h1.textContent =datos.answer;
    posicion.append(h1);
}

//let posicion = document.getElementById("answer");

let button = document.getElementById("button");
button.addEventListener('click',ejecutarApi);

ejecutarApi();