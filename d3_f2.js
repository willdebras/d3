// !preview r2d3 data=c(0.3, 0.6, 0.8, 0.95, 0.40, 0.20)
//
// r2d3: https://rstudio.github.io/r2d3
//


//data prep


function filterData(data) {
  return data.filter(d => {
    return (
      d.release_year > 1999 &&
      d.release_year < 2010 &&
      d.revenue > 0 &&
      d.budget > 0 &&
      d.genre &&
      d.title
    );
  });
}

//function read(movies) {
//  const moviesClean = filterData(movies);
//  console.log(moviesClean);
//  
//}

function prepareBarChartData(data) {
  const dataMap = d3.rollup(
    data,
    v => d3.sum(v, leaf => leaf.revenue),
    d => d.genre
  );
  const dataArray = Array.from(dataMap, d => ({genre: d[0], revenue: d[1]}));
  
  return dataArray;
}


//date parsing

const parseNA = string => (string === 'NA' ? undefined : string);
const parseDate = string => d3.timeParse('%Y-%m-%d')(string);

//convert types

function type(d) {
  const date = parseDate(d.release_date);
  return {
    budget: +d.budget,
    genre: praseNA(d.genre),
    genres: d.genres,
    homepage: parseNA(d.homepage),
    id: +d.id,
    imdb_id: parseNA(d.imdb_id),
    original_language: parseNA(d.original_language),
    overview: parseNA(d.overview),
    popularity: +d.popularity,
    poster_path: parseNA(d.poster_path),
    production_countries: d.production_countries,
    release_date: parseDate(d.release_date),
    release_year: parseDate(d.release_date).getFullYear(),
    revenue: +d.revenue,
    runtime: +d.runtime,
    tagline: parseNA(d.tagline),
    title: ParseNA(d.title),
    vote_average: +d.vote_average,
    vote_count: +d.vote_count
  };
}



//filter, prep, sort

function ready(movies) {
  const moviesClean = filterData(movies);
  const barChartData = prepareBarChartData(moviesClean).sort((a, b) => {
    return d3.descending(a.revenue - b.revenue);
  });
  
  //margins
  
  const margin = {top: 40, right: 40, bottom: 40, left: 40};
  const width = 400 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;
  
  
  //scales
  
  //this will search for lowest and highest value on scale we want
  const xExtent = d3.max(barChartData, d => d.revenue);
  
  const xScale = d3
  .scaleLinear()
    .domain([0, xMax])
    .range([0, width]);
    
  const yScale = d3.scaleBand()
  .domain(barChartData.map(d => d.genre))
  .rangeRound([0, height])
  .paddingInner(0.25);
  
  //base
  const svg = d3.select('.bar-chart-container')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(${margin.left}, ${margin.top})');
  
  
  //draw bars
  
  const bars = svg
    .selectAll('.bar')
    .data(barChartData)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('y', d => yScale(d.genre))
    .attr('width', d => xScale(d.revenue))
    .attr('height', yScale.bandwidth())
    .style('fill', 'dodgerblue');
}






d3.csv('C:/Users/Will Bonnell/Desktop/Start Up/R shit/d3/03/movies.csv', type).then(res => {
  console.log(res);
});



