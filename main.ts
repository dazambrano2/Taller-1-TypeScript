import { series } from "./data.js";
import { Serie } from "./Serie.js";

const tbody = document.getElementById("series-tbody") as HTMLTableSectionElement;
const avgElm = document.getElementById("avg-seasons") as HTMLElement;

const detailCard = document.getElementById("serie-detail") as HTMLElement;
const serieImage = document.getElementById("serie-image") as HTMLImageElement;
const serieName = document.getElementById("serie-name") as HTMLElement;
const serieDescription = document.getElementById("serie-description") as HTMLElement;
const serieLink = document.getElementById("serie-link") as HTMLAnchorElement;

renderSeriesTable(series);
renderAverage(series);

function renderSeriesTable(series: Serie[]): void {
  series.forEach(s => {
    const tr = document.createElement("tr");
    tr.className = "serie-row";
    tr.innerHTML = `
      <td>${s.id}</td>
      <td><span class="serie-name">${s.name}</span></td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
    tr.addEventListener("click", () => {
      showSerieDetail(s);
    });
    tbody.appendChild(tr);
  });
}

function renderAverage(series: any[]): void {
  const total = series.reduce((sum, s) => sum + s.seasons, 0);
  const avg = total / series.length;
  avgElm.textContent = `Promedio de temporadas: ${avg}`;
}

function showSerieDetail(serie: Serie): void {
  serieImage.src = serie.image;
  serieImage.alt = serie.name;
  serieName.textContent = serie.name;
  serieDescription.textContent = serie.description;
  serieLink.href = serie.link;
  serieLink.textContent = serie.link;
  
  detailCard.style.display = "block";
}
