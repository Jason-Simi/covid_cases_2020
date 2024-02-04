# COVID Rates Map Project

## Introduction
The COVID Mapping project is a web-based interactive map that visualizes both COVID-19 rates and a count of cases in counties throughtout the US for 2020. The project intends to show a more in depth view of how widespread the virus was across the US.

## Map
Explore [Chloropleth](https://jason-simi.github.io/covid_cases_2020/map1)
Explore [Proportional Symbols](https://jason-simi.github.io/covid_cases_2020/map2)

## Screenshots
![Chloropleth](/img/Screenshot%202024-02-03%20220616.png)
![Proportional Symbols](/img/map2.png)

## Primary Functions

### map.addSource
- Adds a data source to the map, I used it to add the GeoJSON sources for the COVID data

### map.addLayer
- Adds a layer to the map from the data source, I used it to add the COVID layers for both maps

### map.on()
- This function is a listener for a click event that happens on the map. This was set for the covid-point and county-fill. I used it to add a popup display that shows COVID informationfor the area clicked

### Legend Elements / .push()
- This creates legend elements based on the elements specifications.

### .getElementById / .appendChild
- These functions work in conjuction to append the legend to the HTML element using ID's

## Libraries in Use
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/): Used for making the interactive portion of the maps

## Data Sources
- Case/Rate Data [https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv]
- Population Data [https://data.census.gov/cedsci/table?g=0100000US.050000&d=ACS%205-Year%20Estimates%20Data%20Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true]
- U.S. County Shapefile [https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html]

## This project was developed by Jason Simi under the guidance of the class GEOG 458 at the University of Washington
