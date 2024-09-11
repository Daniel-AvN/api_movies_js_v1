// Dan-Avn

// https://rickandmortyapi.com/api/character

const boton = document.getElementById('mostrar')
const tabla = document.getElementById('tabla')




boton.addEventListener('click', (e) => {
    let titulo = document.getElementById('titulo').value

    e.preventDefault()
    // console.log(titulo);

    //fetch solicitar info de una pagina, trae un archivo json
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=95cdca84&s='+titulo)  
    .then(respuesta => respuesta.json() ) //cuando trae la peticion genera una respuesta y esta la guardamos en un archivo json
    .then(json => {
        json= json.Search 
        console.log(json);
        
        tabla.innerHTML = `
                            <tr>
                               <th>Titulo</th>
                               <th>año</th>
                               <th>tipo</th>
                               <th>poster</th>
                            </tr>
                            `

        for(dato of json){
            tabla.innerHTML += `
            <tr>
              <td>${dato.Title}</td>
              <td>${dato.Year}</td>
              <td>${dato.Type}</td>
              <td> <img src="${dato.Poster}">  </td>
            </tr>`
        }
        // tabla.innerHTML += `</table>`

    })

})