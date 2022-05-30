import { Component } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import { MapChart } from '@amcharts/amcharts4/maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  {
  private chart: am4maps.MapChart = new MapChart;

ngAfterViewInit(){
  this.chart=am4core.create("chartdiv", am4maps.MapChart);  //Create map instance
  this.chart.geodata=am4geodata_usaLow; //set map definition
  this.chart.projection= new am4maps.projections.AlbersUsa();  //set projection

  // Creating polygon series and loading data
  let polygonSeries=this.chart.series.push(new am4maps.MapPolygonSeries()); //create map polygon 
  polygonSeries.exclude=["AQ"]; //Exclude An
  polygonSeries.useGeodata=true;  //Make map to load polygon data from GeoJSON

  //Configure series
  let polygonTemplate= polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText="{name}";
  polygonTemplate.polygon.fillOpacity=0.6;
  polygonTemplate.fill=am4core.color("#E38F35");
  let hs=polygonTemplate.states.create("hover");
  hs.properties.fill=am4core.color("#1b078f");
}

 ngOnDestroy(){
   if(this.chart){
     this.chart.dispose();
   }
 }
}
