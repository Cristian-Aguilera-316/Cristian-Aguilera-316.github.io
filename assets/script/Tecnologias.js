import { tecnologias } from "./data/data_tecnologias.js";

const contenedor = document.querySelector("#indice_tecnologias");

const crearPill = (t) => `
  <span class="tech-pill">
    <img class="tech-icon" src="${t.icon}" alt="${t.label}">
    ${t.label}
  </span>
`;

const renderTecnologias = () => {
  contenedor.classList.add(
    "d-flex",
    "flex-wrap",
    "gap-2",
    "justify-content-start",
    "align-items-center"
  );
  contenedor.innerHTML = tecnologias.map(crearPill).join("");
};

renderTecnologias();
