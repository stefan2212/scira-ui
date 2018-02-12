import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonService {

  constructor(public http:Http) { }

  getAllData(){
    return this.http.get("http://192.168.100.16:8080/scira/rest/search/keyword/machine%20learning")
      .map(res =>res.json())
  }

  getAuthors(id){
    return this.http.get("http://192.168.100.16:8080/scira/rest/search/author/" +id)
      .map(res =>res.json())
  }


  getDataByFilter(requestItem){
    var item;
    var query="http://192.168.100.16:8080/scira/rest/search/paper"
    if(!(requestItem.type==null || requestItem.type==""))
      query = query + "?topic="+ "scientific%20article"
    if(!(requestItem.author==null || requestItem.author=="")) {
      item = requestItem.author
      item.replace(" ", "%20")
      query = query + "&author=" + item
    }
    if(!(requestItem.citation==null || requestItem.citation==""))
      query = query + "&citation="+requestItem.citation
    if(!(requestItem.subjectOf==null || requestItem.subjectOf==""))
      query = query + "&subjectOf="+requestItem.type
    if(!(requestItem.publication==null || requestItem.publication==""))
      query = query + "&publication="+requestItem.type
    if(!(requestItem.language==null || requestItem.language==""))
      query = query + "&language="+requestItem.type
    if(!(requestItem.generalSearch==null || requestItem.generalSearch=="")) {
      item = requestItem.generalSearch
      item.replace(" ", "%20")
      query = query + "&keyword=" + item
    }
    if(!(requestItem.date==null || requestItem.date==""))
      query = query + "&datePublishedStartInterval="+requestItem.date
    if(!(requestItem.endDate==null || requestItem.endDate==""))
      query = query + "&datePublishedEndInterval="+requestItem.endDate
    console.log(query)
    return this.http.get(query)
      .map(res =>res.json())
  }

  getPaperById(id){
    return this.http.get("http://192.168.100.16:8080/scira/rest/search/paper/"+ id)
      .map(res =>res.json())


  }
}
