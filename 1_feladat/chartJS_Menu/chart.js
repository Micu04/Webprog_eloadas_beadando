const ctx = document.getElementById('lineChart').getContext('2d');
let chart;

function createChart(data) {
    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map((_, idx) => `${idx + 1}. pont`),
            datasets: [{
                label: 'Kiválasztott sor adatai',
                data: data,
                borderColor: 'blue',
                backgroundColor: 'rgba(173,216,230,0.4)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

document.querySelectorAll('#dataTable tr').forEach(row => {
    row.addEventListener('click', () => {
        const rowData = Array.from(row.children).map(cell => Number(cell.textContent));
        createChart(rowData);
    });
});