chart = {
    drawChart(chartObject) {
        console.log('callback invoked');
        console.log(chartObject);
        // Load the Visualization API and the corechart package.
        google.charts.load('current', { 'packages': ['corechart'] });

        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(draw);

        // Callback that creates and populates a data table,
        // instantiates the pie chart, passes in the data and
        // draws it.
        function draw() {
            console.log("Drawing the chart");
            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn(chartObject.Axes[1][0], chartObject.Axes[1][1]);
            data.addColumn(chartObject.Axes[0][0], chartObject.Axes[0][1]);
            chartData = chartObject.Data.map(val => Object.values(val));
            console.log(chartData);
            data.addRows(chartData);

            // Set chart options
            var options = {
                'title': 'How Much Pizza I Ate Last Night',
                'width': 400,
                'height': 300
            };

            // Instantiate and draw our chart, passing in some options.
            switch (chartObject.Type.toLowerCase()) {
                case "piechart":
                    var chart = new google.visualization.PieChart(document.getElementById(chartObject.ElementId));
                    break;
                case "columnchart":
                    var chart = new google.visualization.ColumnChart(document.getElementById(chartObject.ElementId));
                    break;
                case "linechart":
                    var chart = new google.visualization.LineChart(document.getElementById(chartObject.ElementId));
                    break;
            }
            chart.draw(data, options);
        }
    }
};
