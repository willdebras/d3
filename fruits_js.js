// !preview r2d3 data = as.matrix(data.frame(name = c("apple", "grape", "orange", "melon", "pear"), count = c(21, 13, 9, 6, 2)))
//
// r2d3: https://rstudio.github.io/r2d3
//


var new_data = [
  {name: "orange", count: 21},
  {name: "grape", count: 13},
  {name: "apple", count: 8},
  {name: "banana", count: 5},
  {name: "pear", count: 3},
  {name: "lemon", count: 2}];


var data_ready = d3.pie()
    .value(d => d.count)
  (new_data);
  


const piechart = d3.selectAll("some viz")
  .append("dough")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

const dough = svg
  .selectAll('ok')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(210)
    .outerRadius(310)
    .padRadius(300)
    .padAngle(2 / 300)
    .cornerRadius(8)
    )
  .attr('fill', "steelblue")
  .style("opacity", 0.7);
  
const xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));
    
const yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(height / 40))
    .call(g => g.select(".domain").remove());
    
