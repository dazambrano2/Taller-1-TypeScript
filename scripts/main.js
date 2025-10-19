import { series } from "./data.js";
var tbody = document.getElementById("series-tbody");
var avgElm = document.getElementById("avg-seasons");
renderSeriesTable(series);
renderAverage(series);
function renderSeriesTable(series) {
    series.forEach(function (s) {
        var tr = document.createElement("tr");
        tr.innerHTML = "\n      <td>".concat(s.id, "</td>\n      <td>").concat(s.name, "</td>\n      <td>").concat(s.channel, "</td>\n      <td>").concat(s.seasons, "</td>\n    ");
        tbody.appendChild(tr);
    });
}
function renderAverage(series) {
    var total = series.reduce(function (sum, s) { return sum + s.seasons; }, 0);
    var avg = total / series.length;
    avgElm.textContent = "Promedio de temporadas: ".concat(avg.toFixed(2));
}
