function plotMohrCircle() {
    const stressX = parseFloat(document.getElementById('stress-x').value);
    const stressY = parseFloat(document.getElementById('stress-y').value);
    const shearStress = parseFloat(document.getElementById('shear-stress').value);

    // Calculate center and radius of Mohr's Circle
    var center = [(stressX + stressY) / 2, 0];
    var radius = Math.sqrt(Math.pow((stressX - stressY) / 2, 2) + Math.pow(shearStress, 2));
    console.log(radius);
    // Define layout for plot
    var layout = {
        title: "Mohr's Circle",
        xaxis: {
            title: "Normal Stress",
            range: [center[0] - radius - 10, center[0] + radius + 10],
            scaleanchor: 'y',  // Make the x-axis use the same scale as the y-axis
            // scaleratio: 1,     // Ratio of x-axis vs y-axis
        },
        yaxis: {
            title: "Shear Stress",
            range: [-radius - 10, radius + 10]
        }
    };

    // Define data for plot
    var data = [
        {
            x: [stressX, stressY, stressX],
            y: [shearStress, -shearStress, shearStress],
            type: 'scatter',
            mode: 'lines',
            line: {
                color: 'red',
                width: 2
            },
            showlegend: false  // Disable the legend for this trace

        },
        {
            x: [],
            y: [],
            type: 'scatter',
            mode: 'lines',
            line: {
                color: 'blue',
                width: 2
            },
            showlegend: false  // Disable the legend for this trace

        }
    ];

    // Generate points for the circle
    for (var i = 0; i <= 360; i++) {
        var theta = i * Math.PI / 180;
        var xPoint = center[0] + radius * Math.cos(theta);
        var yPoint = center[1] - radius * Math.sin(theta);
        data[1].x.push(xPoint);
        data[1].y.push(yPoint);
    }

    // Plot Mohr's Circle
    Plotly.newPlot('graph-container', data, layout);
}
