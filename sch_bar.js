// !preview r2d3 data=c(0.3, 0.6, 0.8, 0.95, 0.40, 0.20)
//
// r2d3: https://rstudio.github.io/r2d3
//

var barHeight = Math.ceil(height / data.length);



const bars = svg.selectAll('rect')
  .data(data)
  .enter().append('rect')
    .attr('width', function(d) { return d * width; })
    .attr('height', barHeight - 3)
    .attr('y', function(d, i) { return i * barHeight; })
    .attr('fill', 'dodgerblue');

const xMax = d3.max(data);

const xScale = d3
  .scaleLinear()
    .domain([0, xMax])
    .range([0, width]);

const xAxis = d3.axisTop(xScale)
//  .tickFormat(d3.format('~s'))
  .tickSizeInner(-height)
  .tickSizeOuter(0);

const xAxisDraw = svg
  .append('g')
  .attr('class', 'x axis')
  .call(xAxis);