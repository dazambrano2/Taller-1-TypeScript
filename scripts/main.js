import { series } from "./data.js";
var tbody = document.getElementById("series-tbody");
var avgElm = document.getElementById("avg-seasons");
var detailCard = document.getElementById("serie-detail");
var serieImage = document.getElementById("serie-image");
var serieName = document.getElementById("serie-name");
var serieDescription = document.getElementById("serie-description");
var serieLink = document.getElementById("serie-link");
renderSeriesTable(series);
renderAverage(series);
function renderSeriesTable(series) {
    series.forEach(function (s) {
        var tr = document.createElement("tr");
        tr.className = "serie-row";
        tr.innerHTML = "\n      <td>".concat(s.id, "</td>\n      <td><span class=\"serie-name\">").concat(s.name, "</span></td>\n      <td>").concat(s.channel, "</td>\n      <td>").concat(s.seasons, "</td>\n    ");
        tr.addEventListener("click", function () {
            showSerieDetail(s);
        });
        tbody.appendChild(tr);
    });
}
function renderAverage(series) {
    var total = series.reduce(function (sum, s) { return sum + s.seasons; }, 0);
    var avg = total / series.length;
    avgElm.textContent = "Promedio de temporadas: ".concat(avg);
}
function showSerieDetail(serie) {
    serieImage.src = serie.image;
    serieImage.alt = serie.name;
    serieName.textContent = serie.name;
    serieDescription.textContent = serie.description;
    serieLink.href = serie.link;
    serieLink.textContent = serie.link;
    detailCard.style.display = "block";
}
