const meal = "Meal #1";
const dummyMeal = {           // rough mock up of the meal schema
    'datePosted': 'date_here',
    'ingredients':{
        'beef': 50,
        'carrots': 15,
        'acai': 6
    },
};


const parseMeal = (meal) => {
    var ingredients = [];
    for (const key in meal.ingredients) {
        const value = {};
        value['food'] = key;
        value['carbon'] = meal.ingredients[key];
        ingredients.push(value)
    }
    return ingredients;
};

const dummyData = parseMeal(dummyMeal);
console.log(dummyData);

// set the height and width of a square canvas
const canSize = 300;

d3.select('h1').text(meal); // The title of the meal in the header


// Set the canvas size
const svg = d3.select('svg')
    .classed('canvas', true)
    .style('width', canSize + 'px')
    .style('height', canSize + 'px'),
    width = svg.attr('width'),
    height = svg.attr('height');


// Setting the size of the circle
const radius = canSize/2;

// create a attribute to place the pie in the center of the canvas
const g = svg.append('g').attr('transform', `translate(${canSize/2}, ${canSize/2})`);

// this is where the color of each slice goes
const color = d3.scaleOrdinal(['red', 'blue', 'green', 'gray'])
// .value defines each slice of the pie chart
const pie = d3.pie().value(data => data.carbon);

// draws each slice and fills it with radius 0
const path = d3.arc().outerRadius(radius).innerRadius(0); // innerRadius can be increased to create a donut chart

//determines the position for the text labels
const label = d3.arc().outerRadius(radius).innerRadius(radius-80)

// create the svg elements to draw the chart
const pies = g.selectAll('.arc')
    .data(pie(dummyData))
    .enter()
    .append('g')
    .attr('class', 'arc')

// renders the slices
pies.append('path').attr('d', path).attr('fill', d => color(d.data.carbon))

// render the text
pies.append('text')
    .attr('transform', d => `translate(${label.centroid(d)})`)
    .text(d => d.data.food)