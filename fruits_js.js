// !preview r2d3 data = data.frame(name = c("apple", "grape", "orange", "melon", "pear"), count = c(21, 13, 9, 6, 2))
//
// r2d3: https://rstudio.github.io/r2d3
//



var data_ready = d3.pie()
  .value(d => d.count)
  (data);

    
var xAxis = g => g
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

var yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(height / 40))
    .call(g => g.select(".domain").remove());
    


const dough = svg
  .selectAll('ok')
  .data(data_ready)
  .enter()
  .attr('d', d3.arc()
    .innerRadius(210)
    .outerRadius(310)
    .padRadius(300)
    .padAngle(2 / 300)
    .cornerRadius(8)
    );
  
