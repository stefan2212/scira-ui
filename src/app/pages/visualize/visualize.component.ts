import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as d3 from 'd3';
import * as d3sparql from 'd3-sparql';
import * as forcegraph from 'd3-force'

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //  exec() {
  //   var endpoint = d3.select("#endpoint").property("value")
  //   var sparql = d3.select("#sparql").property("value")
  //   var links = [
  //     { source: 0, target: 1 }
  // ];
  //   console.log(sparql)
  //   console.log(endpoint)
  // }
  //  render(json) {
  //   var config = {
  //     "charge": -500,
  //     "distance": 50,
  //     "width": 1000,
  //     "height": 750,
  //     "selector": "#result"
  //   }
    
  // }
  //  exec_offline() {
  //   d3.json("cache/dbpedia/proglang_pair.json", this.render)
  // }
  //  toggle() {
  //   d3sparql.toggle()
  // }

}
