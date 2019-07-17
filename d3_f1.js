// !preview r2d3 data=c(0.3, 0.6, 0.8, 0.95, 0.40, 0.20)
//
// r2d3: https://rstudio.github.io/r2d3
//

//var barHeight = Math.ceil(height / data.length);
//
//svg.selectAll('rect')
//  .data(data)
//  .enter().append('rect')
//    .attr('width', function(d) { return d * width; })
//    .attr('height', barHeight)
//    .attr('y', function(d, i) { return i * barHeight; })
//    .attr('fill', 'steelblue');

//const svg = d3
//  .select('body')
//  .append('svg')
//  .attr('width', 500)
//  .attr('height', 300);

const pop = svg.append('g').attr('transform', 'translate(100, 100)');

pop 
  .append('line')
  .attr('x2', 200)
  .style('stroke', 'black');
  
pop 
  .append('circle')
  .attr('cx', 200)
  .attr('r', 3);
  
pop 
  .append('text')
  .attr('y', -10)
  .text('Lollipop');
  