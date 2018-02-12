import { Injectable } from '@angular/core';
import { AbstractSearch } from './abstract-search';
import { Observable } from 'rxjs/Observable';
import { Paper } from '../../models/paper';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MockSearchService implements AbstractSearch {
  getPages(): Observable<Paper[]> {
    return undefined;
  }



  public search() {
    return 'din mockuletz';
  }
  public getPaperByID(id): Observable<Paper> {

    return undefined;

  }

  constructor() { }

}
