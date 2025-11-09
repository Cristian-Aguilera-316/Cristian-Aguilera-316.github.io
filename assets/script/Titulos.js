import { data_titulos } from "./data/data_titulos.js";

const dasboard = document.querySelector("#indice_titulos")

const pintarTitulos = () => {
    const cards = data_titulos.map((titulos) => {
        return `
            <div class="tar_titulos">
                <h5>${titulos.nombre}</h5>
                <div class="tar_main">
                    <div class=tar_text"">
                        <div>
                        <p class="card-text">${titulos.descripcion}</p>
                        <p class="card-text">${titulos.institucion}</p>
                        <p class="card-text">${titulos.codigo}</p>
                    </div>
                    <picture class="tar_img">
                        <img src="${titulos.src}" class="img-fluid rounded-start" alt="...">
                    </picture>
                </div>
            </div>
            
        `
    })
     dasboard.innerHTML = cards.join ("")
}

pintarTitulos()