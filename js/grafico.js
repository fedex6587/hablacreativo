function cargarGrafico(){
    const CHART = document.getElementById("lineChart");
    console.log(CHART);
    var zonas = [];
    var habitantes = [];

    debugger;
    $('#tablaPoblacion tbody tr td:nth-child(1)').each( function(){
            zonas.push( $(this).text());       
    });

    $('#tablaPoblacion tbody tr td:nth-child(2)').each( function(){
            habitantes.push( $(this).text());       
    });


    let lineChart = new Chart(CHART,{
        type: 'bar',
        data: {
        labels: zonas ,
        datasets: [
            {
                label: "Población de Medellin por Zonas",
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                data: habitantes,
            }
        ]
        }
    });
}

