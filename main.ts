import { series } from "./data.js";

const tbody = document.getElementById("series-tbody") as HTMLTableSectionElement;
const avgElm = document.getElementById("avg-seasons") as HTMLElement;

renderSeriesTable(series);
renderAverage(series);

function renderSeriesTable(series: any[]): void {
  series.forEach(s => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderAverage(series: any[]): void {
  const total = series.reduce((sum, s) => sum + s.seasons, 0);
  const avg = total / series.length;
  avgElm.textContent = `Promedio de temporadas: ${avg.toFixed(2)}`;
}
