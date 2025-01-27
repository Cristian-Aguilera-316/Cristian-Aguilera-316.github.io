import { data_trabajos } from "./data/data_trabajos.js";

const dasboard = document.querySelector("#portfolio_trabajos")

const pintarTrabajos = () => {
    const cards = data_trabajos.map((trabajos) => {
        return `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${trabajos.imgUrl}" />
                    <h5>${trabajos.titulo}</h5>
                    <p>${trabajos.descripcion}</p>
                    <div>
                    <a target="_blank" href="${trabajos.github}" type="button" class="btn btn-dark">github</a>
                    <a target="_blank" href="${trabajos.pages}" type="button" class="btn btn-dark">pages</a>
                    </div>
                    <div class="iconos mt-2">
                        ${trabajos.html ? '<i class="fab fa-html5 text-danger fa-3x"></i>' : ''}
                        ${trabajos.css ? '<i class="fab fa-css3-alt text-primary fa-3x"></i>' : ''}
                        ${trabajos.javascript ? '<i class="fab fa-js text-warning fa-3x"></i>' : ''}
                        ${trabajos.react ? '<i class="fab fa-react text-info fa-3x"></i>' : ''}
                    </div>
                </div>
            </div>
        `
    })
     dasboard.innerHTML = cards.join ("")
}

pintarTrabajos()

