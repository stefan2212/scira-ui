import {Component, Inject, OnInit} from '@angular/core';
import { AbstractSearch } from '../../services/search/abstract-search';
import { Paper } from '../../models/paper';
import {JsonService} from '../../services/json.service';
import * as d3 from 'd3';
import jsonldVis from 'jsonld-vis';
import {Router} from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  requestItem: RequestItem;
  NO_PARSE = ["@context", "@type", "identifier", "name", "learningResourceType"];
   max_map : any;
   canvas_dict : any;
   maping_dict : any;
   diag_objects : any;
  title = 'Testing datepicker';
  filter_visibility = true;
  paper_container_size = 'col s9';
  filter_container_size = 'col s3';
  filter_arrow_type = 'arrow_back';
  position = 'above';
  papers:Array<Paper> = [];
  paper: Paper;
  domains: Object = {
    'Machine Learning': null,
    'Computer Science': null,
    'Security': null,
    'Artifical Inteligence': null
  };
  types: Object = {
    'Scientific article': null,
    'Academic journale': null,
    'Article': null,
    'Book': null,
    'Publication': null,
    'Report': null,
    'Textbook':null
  }
  constructor(private searchService: AbstractSearch, private jsonService:JsonService, private router:Router){
    this.requestItem = new RequestItem();
    this.paper = new Paper("","","","","","","")
  }

  ngOnInit() {

    console.log(this.searchService.search());
  //  this.searchService.getPages().subscribe(papers => this.papers = papers);
   // console.log(JSON.parse(JSON.stringify(this.papers[0])));
    this.initFilters();
  }
  initFilters(): any {
    $(document).ready(() => {
      $('#type_filter.chips-autocomplete').material_chip({
        data: [],
        placeholder:"Type",
        autocompleteOptions: {
          data: this.types,
          limit: Infinity,
          minLength: 1
        }
      });
      $('#author_filter.chips-autocomplete').material_chip({
        data: [],
        placeholder: 'Author',
        autocompleteOptions:{
        }
      });
      $('#citation_filter.chips-autocomplete').material_chip({
        data: [],
        placeholder: 'Citation'
      });
      $('#subjectOf_filter.chips-autocomplete').material_chip({
        data: [],
        placeholder: 'Subject'
      });
      $('#publication_filter.chips-autocomplete').material_chip({
        data: [],
        placeholder: 'Publication'
      });
      $('#language_filter.chips-autocomplete').material_chip({
        data: [],
        placeholder: 'Language'
      });
      $('#date_filter.chips-autocomplete').material_chip({
        data: [],
        placeholder: 'Publication Date'
      });
      $('#enddate_filter.chips-autocomplete').material_chip({
        data: [],
        placeholder: 'Publication Date'
      });
      $('#search.chips-autocomplete').material_chip({
        data: []
      })

    });
  }
  toggleFilters() {
    if (this.filter_visibility) {
      this.filter_arrow_type = 'arrow_forward';
      this.paper_container_size = 'col s12';
      this.filter_container_size = 'col s0';
      document.getElementById('filter-container').classList.add('hide');
    } else {
      this.filter_arrow_type = 'arrow_back';
      this.paper_container_size = 'col s9';
      this.filter_container_size = 'col s3';
      document.getElementById('filter-container').classList.remove('hide');
    }
    this.filter_visibility = !this.filter_visibility;
  }
  onFocus() {
    const element = $('div.search-wrapper');
    element.addClass('focused');
  }
  onFocusOut() {
    const element = $('div.search-wrapper');
    element.removeClass('focused');
  }

  onClick(){

    // Here i will make the request for the servetr
    for(let element of $('#type_filter.chips-autocomplete').material_chip('data')){
      this.requestItem.type = element.tag;
    }
    for(let element of $('#author_filter.chips-autocomplete').material_chip('data')){
      this.requestItem.author = element.tag;
    }
    for(let element of $('#citation_filter.chips-autocomplete').material_chip('data')){
      this.requestItem.citation = element.tag
    }
    for(let element of $('#subjectOf_filter.chips-autocomplete').material_chip('data')){
      this.requestItem.subjectOf = element.tag;
    }
    for(let element of $('#publication_filter.chips-autocomplete').material_chip('data')){
      this.requestItem.publication = element.tag;
    }
    for(let element of $('#language_filter.chips-autocomplete').material_chip('data')){
      this.requestItem.language = element.tag
    }
    // this.jsonService.getAllData().subscribe((posts) => {
    //   posts.creativeWork.forEach( e => {
    //     this.paper.id = e.creativeWorkId;
    //     this.paper.title = e.creativeWorkTitle;
    //     console.log(this.paper)
    //     this.papers.push(this.paper)
    //     this.paper = new Paper("","","","","","","")
    //   })
    // });
    this.jsonService.getDataByFilter(this.requestItem).subscribe((posts) =>{
        posts.creativeWork.forEach( e => {
          this.paper.id = e.creativeWorkId;
          this.paper.title = e.creativeWorkTitle;
          console.log(this.paper)
          this.papers.push(this.paper)
          this.paper = new Paper("","","","","","","")
        })
    });
    this.requestItem = new RequestItem();


    // this.searchService.getPages().subscribe(papers => {this.papers = papers
    //   // this.drawGraph(papers)
    // });
    this.searchService.getPages();

  }

  getPaperId(paper:Paper){
    console.log(paper)
    this.router.navigate(['visualize', paper.id])
  }

  getPapers(){
    return this.papers
  }

  drawGraph(papers){
    jsonldVis(d3);
    console.log(papers);
    d3.jsonldVis(papers, '#graph', "search.component.css");
  }
}

export class RequestItem{
  type: string;
  author: Array<string> = [];
  citation: Array<string> = [];
  subjectOf: string;
  publication: string;
  language: string;
  generalSearch: string;
  date: any;
  endDate: any;
}
