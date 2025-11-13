
import { data_trabajos } from "./data/data_trabajos.js";


const inner = document.getElementById('trabajos-inner');
const indicators = document.getElementById('trabajos-indicators');


const slides = data_trabajos.map((t, i) => {
    const isActive = i === 0 ? 'active' : '';
        return `
            <div class="carousel-item ${isActive}">
                <a href="${t.github}" target="_blank" rel="noopener noreferrer">
                    <img src="${t.imgUrl}" class="d-block w-100" alt="${t.titulo}">
                </a>
                <div class="carousel-caption d-block">
                    <h5 class="fw-bold">${t.titulo}</h5>
                    <p class="mb-2">${t.descripcion}</p>
                    <div class="mb-2">
                        <a target="_blank" href="${t.github}" class="btn btn-sm btn-dark me-2">GitHub</a>
                        <a target="_blank" href="${t.pages}" class="btn btn-sm btn-success">Demo</a>
                    </div>
                    <div class="iconos mt-2">
                        ${t.html ? '<i class="fab fa-html5 text-danger fa-2x me-2"></i>' : ''}
                        ${t.css ? '<i class="fab fa-css3-alt text-primary fa-2x me-2"></i>' : ''}
                        ${t.javascript ? '<i class="fab fa-js text-warning fa-2x me-2"></i>' : ''}
                        ${t.react ? '<i class="fab fa-react text-info fa-2x me-2"></i>' : ''}
                        ${t.node ? '<i class="fab fa-node-js text-success fa-2x me-2"></i>' : ''}
                    </div>
                </div>
            </div>
        `;
}).join('');

const dots = data_trabajos.map((_, i) => `
    <button type="button"
        data-bs-target="#trabajosCarousel"
        data-bs-slide-to="${i}"
        class="${i === 0 ? 'active' : ''}"
        ${i === 0 ? 'aria-current="true"' : ''}
        aria-label="Slide ${i + 1}">
    </button>
`).join('');

inner.innerHTML = slides;
indicators.innerHTML = dots;

new bootstrap.Carousel('#trabajosCarousel', {
    interval: 5000,
    ride: 'carousel'
});