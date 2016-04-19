
var margin = {
    top: 30,
    right: 20,
    bottom: 30, left: 80
    },
    width = 500 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var color = d3.scale.category10();

var widthScale = d3.scale.linear()
                    .range([0, width]);

var heightScale = d3.scale.linear()
                    .range([height, 0]);

var xAxis = d3.svg.axis()
             .scale(widthScale)
             .orient("bottom");

var yAxis = d3.svg.axis()
            .scale(heightScale)
            .orient("left");

var svg = d3.select("body").select("svg")
            .attr("height", height + margin.top + margin.bottom)
            .attr("width", width + margin.left + margin.right)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var xg = svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")");
    xg
    .append("text")
    .attr("class", "label")
    .attr("x", width)
    .attr("y", -5)
    .style("text-anchor", "end");

var yg = svg.append("g")
            .attr("class", "y axis");

    yg
    .append("text")
    .attr("class", "label")
    .attr("transform", "rotate(-90)")
    .attr("y", 5)
    .attr("dy", ".71em")
    .style("text-anchor", "end");

var legend = svg.selectAll(".legend")
    .data(color.domain())
    .enter().append("g")
    .attr("class", "legend")
    .attr("transform", function(d, i) { return "translate(0," + i * 25 + ")"; });

legend.append("rect")
    .attr("x", width - 15)
    .attr("width", 15)
    .attr("height", 15)
    .style("fill", color);

legend.append("text")
    .attr("x", width - 20)
    .attr("y", 10)
    .attr("dy", ".35em")
    .style("text-anchor", "end")
    .text(function(d) { return d; });


function update(){
    var varX = d3.select('#sel-x').node().value;
    var varY = d3.select('#sel-y').node().value;

    var mpg_min = $('#mpg-min').val();
    var mpg_max = $('#mpg-max').val();

    dataFilter = data.filter(function(d){
        return d.mpg>=mpg_min && d.mpg<=mpg_max;
    });

    widthScale.domain([0,d3.max(dataFilter, function(d) { return d[varX]; })]).nice();
    heightScale.domain([0,d3.max(dataFilter, function(d) { return d[varY]; })]).nice();

    xg.call(xAxis);
    yg.call(yAxis);

    xg.select("text").text(varX);
    yg.select("text").text(varY);

    var circles = svg.selectAll(".dot")
        .data(dataFilter)


    circles.enter()
        .append("circle")
        .attr("class", "dot");

    circles.exit().remove();

    circles.attr("cx", function(d) { return widthScale(d[varX]); })
        .attr("cy", function(d) { return heightScale(d[varY]); })
        .attr("r", 3.2)
        .on("mouseover", function (d) {
            d3.select('#hovered')
                .text(d["name"])
        });
    
}

var data = null;

d3.csv('car.csv', function(csv) {
    var headers = d3.keys(csv[0]);
    $('#sel-x').empty();
    $('#sel-y').empty();
    $.each(headers, function(i, p) {
        if(p == 'name' || p == 'origin'){ return;}
        $('#sel-x').append($('<option></option>').val(p).html(p));
        $('#sel-y').append($('<option></option>').val(p).html(p));
    });

    csv.forEach(function(row) {
        row.name = row.name;
        row.origin = row.origin;
        row["model.year"] = +row["model.year"];
        row.mpg = +row.mpg;
        row.cylinders = +row.cylinders;
        row.displacement = +row.displacement;
        row.horsepower = +row.horsepower;
        row.weight = +row.weight;
        row.acceleration = +row.acceleration;
    });

    data = csv;
  //  update("mpg","weight");

});

d3.select('#update').on('click',function(){
    update();
});