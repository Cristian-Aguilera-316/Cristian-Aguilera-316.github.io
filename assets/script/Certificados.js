import { data_certificados } from "./data/data_certificados.js";

const dasboard = document.querySelector("#portfolio_certificados");

const pintarCertificados = () => {
    const cards = data_certificados.map((certificados) => {
        return `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <a href="${certificados.src}" target="_blank" rel="noopener noreferrer">
                    <img src="${certificados.src}" class="card-img-top" alt="${certificados.titulo}"/>
                </a>
                    <div class="card-body">
                        <h5 class="card-title">${certificados.titulo}</h5>
                        <p class="card-text">${certificados.descripcion}</p>
                    </div>
                </div>
            </div>
        `
    })
     dasboard.innerHTML = cards.join ("")
}

pintarCertificados()

