var margin = 10;

var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

d3.csv("assets/data/data.csv").then(function(csvdata) {
    
    csvdata.forEach(function(data) {
        data.age = +data.age;
        data.smokes = +data.smokes;
    });

    //console.log(csvdata);

    var xscale = d3
        .scaleLinear()
        .domain([0, 100])
        .range([0, 100]);
    var yscale = d3
        .scaleLinear()
        .domain([0, 100])
        .range([0, 100]);

    var xaxis = d3.axisBottom(xscale);
    var yaxis = d3.axisLeft(yscale);
    
    svg
        .append("g")
        .call(xaxis)
        .attr("class", "xaxis");
    svg
        .append("g")
        .call(yaxis)
        .attr("class", "yaxis");

    var circles = chartGroup.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xscale(d.age))
        .attr("cy", d => yscale(d.smokes))
        .attr("r", "10");

});