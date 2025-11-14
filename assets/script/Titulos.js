import { data_titulos } from "./data/data_titulos.js";

const timeline = document.querySelector("#portfolio_titulos");

const plantillaItem = (t, i) => {
    const side = i % 2 === 0 ? "left" : "right";
    const alt = `${t.nombre} - ${t.institucion ?? ""}`.trim();
        return `
            <div class="timeline-item ${side}">
                <div class="timeline-dot">
                </div>
                <article class="timeline-card title-card h-100 overflow-hidden">
                    <div class="position-relative ratio ratio-16x9">
                        <img src="${t.src}" alt="${alt}" class="w-100 h-100 object-fit-cover" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title mb-1">${t.nombre}</h5>
                        <p class="text-secondary small mb-1">${t.institucion ?? ""}</p>
                        <p class="text-secondary small mb-2">${t.periodo ?? ""}</p>
                        <p class="card-text small mb-3">${t.descripcion}</p>
                        <div class="d-flex gap-3 align-items-center">
                            ${t.url ? `
                            <a href="${t.url}" target="_blank" rel="noopener" class="btn btn-sm btn-success">
                                ver más
                            </a>` : ``}
                            ${t.codigo ? `
                            <span class="badge rounded-pill bg-dark border border-success">
                                ID ${t.codigo}
                            </span>` : ``}
                        </div>
                    </div>
                </article>
            </div>
        `;
    };

const pintarTitulos = () => {
    timeline.innerHTML = data_titulos.map(plantillaItem).join("");
};

pintarTitulos();
