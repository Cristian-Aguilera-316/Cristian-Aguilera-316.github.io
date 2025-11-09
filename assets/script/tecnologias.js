import { data_tecnologias } from "./data/data_tecnologias.js";

const dasboard = document.querySelector("#indice_tecnologias")

const pintarTecnologias = () => {
    const cards = data_tecnologias.map((tecnologias) => {
        return `            
            <div class="">
                <span class="pill">
                    <img src="${tecnologias.src}" width="20" height="20" alt="HTML"> ${tecnologias.nombre}
                </span>
            </div>

        `
    })
     dasboard.innerHTML = cards.join ("")
}

pintarTecnologias()

