import { data_titulos } from "./data/data_titulos.js";

const dasboard = document.querySelector("#portfolio_titulos")

const pintarTitulos = () => {
    const cards = data_titulos.map((titulos) => {
        return `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <a 
                        href="${titulos.url}" target="_blank" rel="noopener noreferrer">
                        <img src="${titulos.src}" class="card-img-top" alt=""/>
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${titulos.nombre}</h5>
                        <p class="card-text">${titulos.descripcion}</p>
                    </div>
                </div>
            </div>
        `
    })
     dasboard.innerHTML = cards.join ("")
}

pintarTitulos()