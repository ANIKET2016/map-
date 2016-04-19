function createInitialScatterplot() {   
    var margin = {top: 20, right: 20, bottom: 40, left: 40};
    var width = 400 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    // create an SVG using the D3 Margins Convention
    // http://bl.ocks.org/mbostock/3019563
    var svg = d3.select("#scatter").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.selectAll("circle.republican")
    .data(d3.range(0,4))
    .enter().append("circle")
    .attr("cx", function(d,i) { return 4 * i * i + 60*i + 30; })
    .attr("cy", function(d,i) { return (15-i) * 15 + 15; })
    .attr("r", 5) 
    .attr("class", "republican")
    .attr("fill", "red")

    svg.selectAll("circle.democratic")
    .data(d3.range(0,4))
    .enter().append("circle")
    .attr("cx", function(d,i) { return (16-3*i) * (16-3*i) + 20*i; })
    .attr("cy", function(d,i) { return i * 30 + 2 * (70-i); })
    .attr("r", 5) 
    .attr("class", "democratic")
    .attr("fill", "blue")
}
