import { data_trabajos } from "./data/data_trabajos.js";

const dasboard = document.querySelector("#propiedades_venta")

const pintarTrabajos = () => {
    const cards = propiedades_venta.map((propiedades) => {
        return `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedades.src}" class="card-img-top" alt="${propiedades.nombre}"/>
                    <div class="card-body">
                        <h5 class="card-title">${propiedades.nombre}</h5>
                        <p class="card-text">${propiedades.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i>${propiedades.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${propiedades.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedades.baños} Baños</p>
                        <p><i class="fas fa-dollar-sign"></i>${propiedades.costo}</p>
                    </div>
                </div>
            </div>
        `
    })
     dasboard.innerHTML = cards.join ("")
}

pintarTrabajos()