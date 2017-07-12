var ctx = document.getElementById("resultsChart");

var data = {
    datasets: [{
        data: [10, 20]
    }],

    labels: [
        'Ja',
        'Nee'
    ]
};

var resultsChart = new Chart(ctx,{
    type: 'pie',
    data: data,
});
