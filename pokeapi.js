//Función para coger la info del pokeapi
async function infoPoke() {
    let id = document.getElementById("pokemon").value;
    let cuerpo = document.createElement("tbody");
    cuerpo.setAttribute("id", "cuerpo");
    let posicion = document.getElementById("tabla");
    posicion.appendChild(cuerpo);

    let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    let param = {
        headers: {
            "Content-type": "application/json; charset= UTF-8"
        },
        method: "GET"
    }
    try {
        let data = await fetch(url, param);
        let result = await data.json();

        let posicion = document.getElementById("cuerpo");
        let row = document.createElement("tr");
        let th = document.createElement("th");
        th.setAttribute("scope", "row");
        th.textContent = result.name;
        let td1 = document.createElement("td");
        let image = document.createElement("img");
        image.setAttribute("src", result.sprites.front_default)
        let td2 = document.createElement("td");
        let lista = document.createElement("ul");
        td2.appendChild(lista);
        for (let i = 0; i < result.abilities.length; i++) {
            let punto = document.createElement("li");
            punto.textContent = result.abilities[i].ability.name;
            td2.appendChild(punto);
        }
        posicion.appendChild(row);
        row.appendChild(th);
        row.appendChild(td1);
        td1.appendChild(image);
        row.appendChild(td2); 
    }
    catch(error) {
        console.log(error);
    }
}

//Eliminar info
function eliminarInfo() {
    let posicion = document.getElementById("cuerpo");
    posicion.remove();
}