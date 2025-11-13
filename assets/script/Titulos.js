import { data_titulos } from "./data/data_titulos.js";

const grid = document.querySelector("#portfolio_titulos");

const plantillaCard = (t) => {

const alt = `${t.nombre} - ${t.institucion ?? ""}`.trim();
    return `
        <div class="col">
            <article class="card title-card h-100 border-0 shadow-lg overflow-hidden">
                <div class="position-relative ratio ratio-16x9">
                    <img src="${t.src}" alt="${alt}" class="w-100 h-100 object-fit-cover">
                    <span class="title-overlay"></span>
                    <div class="card-img-overlay p-2 d-flex align-items-start">
                        <span class="badge rounded-pill bg-success-subtle title-badge">${t.institucion ?? "—"}</span>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title mb-1">${t.nombre}</h5>
                    <p class="text-secondary small mb-2">${t.periodo ?? ""}</p>
                    <p class="card-text small mb-3">${t.descripcion}</p>
                    <div class="d-flex gap-3">
                        ${t.url ? `
                        <a href="${t.url}" target="_blank" rel="noopener" class="btn btn-sm btn-success"> ver mas
                        </a>` : ``}
                        ${t.codigo ? `
                        <span class="badge rounded-pill bg-dark border border-success">ID ${t.codigo}</span>` : ``}
                    </div>
                </div>
            </article>
        </div>
    `;
};

const pintarTitulos = () => {
  grid.innerHTML = data_titulos.map(plantillaCard).join("");
};

pintarTitulos();