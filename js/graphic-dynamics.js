"use strict";
// Load the Visualization API and the corechart package.
google.charts.load('current', {
    packages: ['corechart', 'line'],
    language: 'ru'
});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
    var jsonData = jQuery.ajax({
        url: "/wp-content/plugins/ТопЧик - анализ поисковых запросов/GetDataGraphics.php?graphic=dynamics",
        dataType: "json",
        async: false
    }).responseText;
    
    // Create the data table.
    var data = new google.visualization.DataTable(jsonData);

    // Set chart options
    var options = {
        'title': 'Динамика изменения ключевых показателей',
        'height': 350,
        'legend': {'position':'left'},
        };

    var chart = new google.charts.Line(document.getElementById('chart_dynamic_div'));
    chart.draw(data, google.charts.Line.convertOptions(options));
    
    google.visualization.events.addListener(chart, 'error', errorHandler);
}