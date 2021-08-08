//Función para coger la info del pokeapi
async function infoPoke() {
    let posicion1 = document.getElementById("nombreInfo");
    let posicion2 = document.getElementById("habilidadesInfo");
    let posicion3 = document.getElementById("imagenInfo");

    if (posicion1 || posicion2 || posicion3) {
        posicion1.remove();
        posicion2.remove();
        posicion3.remove();
    }
    let id = document.getElementById("pokemon").value;

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

        let posicionNombre = document.getElementById("nombre");
        let th = document.createElement("p");
        th.setAttribute("id", "nombreInfo");
        th.textContent = result.name;
        posicionNombre.appendChild(th);

        let posicionHabilidades = document.getElementById("habilidades");
        let lista = document.createElement("ul");
        lista.setAttribute("id", "habilidadesInfo")
        for (let i = 0; i < result.abilities.length; i++) {
            let punto = document.createElement("li");
            punto.textContent = " - " + result.abilities[i].ability.name;
            lista.appendChild(punto);
        }
        posicionHabilidades.appendChild(lista);

        let posicionImagen = document.getElementById("imagen");
        let image = document.createElement("img");
        image.setAttribute("id", "imagenInfo");
        image.setAttribute("src", result.sprites.front_default);
        posicionImagen.appendChild(image); 
    }
    catch(error) {
        console.log(error);
    }
}