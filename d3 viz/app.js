const month = "April";
const dummyData = [
    {day:1, carbon:5},
    {day:2, carbon:15},
    {day:3, carbon:12},
    {day:4, carbon:50},
    {day:5, carbon:13},
    {day:6, carbon:17},
    {day:7, carbon:19},
    {day:8, carbon:17},
    {day:9, carbon:11},
];


// get the max carbon value in the dummyData array
const getMax = (data) => {
    var max;
    for (let i = 0; i < data.length; i++) {
        if (max == null || data[i].carbon > max) {
            max = data[i].carbon;
        }
    }
    return max;
};


// make sure each carbon value is between 0 and 1
const normalize = (data) => {
    max = getMax(data);
    for (let i = 0; i < data.length; i++) {
        data[i].carbon = data[i].carbon / max
    }
};

// replace dummyData with carbon values between 0 and 1
normalize(dummyData);

// set the dimensions of the calendar
const calWidth = 700;
const calHeight = 500;

// you can set how big each day entry should be in the canvas
const dayWidth = calWidth/7; // for 7 days a week
const dayHeight = calHeight/4; // there are about 4 weeks-ish in a month

d3.select('h1').text(month); // Show which month it is in the header

// Set the canvas size for the calendar
const calendar = d3.select('div')
    .classed('calendar', true)
    .style('border', '1px solid red')
    .style('height', calHeight + 'px')
    .style('width', calWidth + 'px');

// Set the grid size for each day to be visualized
const days = calendar
    .selectAll('.circle')
    .data(dummyData)
    .enter()
    .append('div')
    .classed('day', true)
    .style('width', dayWidth + 'px')
    .style("height", dayHeight + 'px');

// Make each circle with a radius that's a percentage of the day div size
const circles = days
    .append('div')
    .classed('circle', true)
    .style('width', data => (Math.min(dayWidth, dayHeight) * data.carbon) + 'px')
    .style('height',  data => (Math.min(dayWidth, dayHeight) * data.carbon) + 'px');