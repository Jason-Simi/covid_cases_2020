mapboxgl.accessToken =
    'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 2.5, // starting zoom
    minZoom: 4, // minimum zoom level of the map
    center: [-98.5795, 39.8283] // starting center
});
const grades = [4, 5, 6],
    colors = ['#e7e1ef', '#c994c7', '#dd1c77'],
    radii = [5, 15, 20];
//load data to the map as new layers.
//map.on('load', function loadingData() {
map.on('load', () => { //simplifying the function statement: arrow with brackets to define a function
    // when loading a geojson, there are two steps
    // add a source of the data and then add the layer out of the source
    map.addSource('covid', {
        type: 'geojson',
        data: 'assets/us-covid-2020-counts.json'
    });
    map.addLayer({
            'id': 'covid-point',
            'type': 'circle',
            'source': 'covid',
            'paint': {
                // increase the radii of the circle as the zoom level and dbh value increases
                'circle-radius': {
                    'property': 'cases',
                    'stops': [
                        [1, 2],
                        [10, 5],
                        [100, 7],
                        [1000, 10],
                        [10000, 15]
                    ]
                },
                'circle-color': {
                    'property': 'cases',
                    'stops': [
                    [100, '#e7e1ef'],
                    [500, '#e7e1ef'],
                    [1000, '#c994c7'],
                    [5000, '#c994c7'],
                    [10000, '#dd1c77']
                    ]
                },
                'circle-stroke-color': 'white',
                'circle-stroke-width': 1,
                'circle-opacity': 0.6
            }
        }
    );
    // click on tree to view magnitude in a popup
    map.on('click', 'covid-point', (event) => {
        new mapboxgl.Popup()
            .setLngLat(event.features[0].geometry.coordinates)
            .setHTML(`<strong>Cases:</strong> ${event.features[0].properties.cases}`)
            .addTo(map);
    });
});
// create legend
const legend = document.getElementById('legend');
// set up legend grades and labels
var labels = ['<strong>Cases</strong>'],
    vbreak;
// iterate through grades and create a scaled circle and label for each
for (var i = 0; i < grades.length; i++) {
    vbreak = grades[i];
    // manually adjust the radius of each dot on the legend
    // to match the smaller circle sizes on the map
    dot_radii = 2 * radii[i];
    labels.push(
        '<p class="break"><i class="dot" style="background:' + colors[i] + '; width: ' + dot_radii +
        'px; height: ' +
        dot_radii + 'px; "></i> <span class="dot-label" style="top: ' + dot_radii / 2 + 'px;">' + vbreak +
        '</span></p>');
}
const source =
    '<p style="text-align: right; font-size:10pt">Sources:  <a href="https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv">New York Times</a></p>';
legend.innerHTML = labels.join('') + source;