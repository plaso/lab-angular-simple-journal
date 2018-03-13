import { Injectable } from '@angular/core';
import { Entry } from '../models/entry.model';
import { environment } from './../../../environments/environment';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

@Injectable()
export class JournalEntriesService {
  private static readonly BASE_API = environment.baseApi;
  private static readonly ENTRIES_API = `${JournalEntriesService.BASE_API}/api/journal-entries`;
  private static defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
  private static defaultOptions: RequestOptions = new RequestOptions({ headers: JournalEntriesService.defaultHeaders });

  constructor(private http: Http) { }

  list(): Observable<Array<Entry>> {
    return this.http.get(JournalEntriesService.ENTRIES_API, JournalEntriesService.defaultOptions)
      .map( (res: Response) => res.json() )
      .catch( error => this.handleError(error) );
  }

  get(id: string): Observable<Entry> {
    return this.http.get(`${ JournalEntriesService.ENTRIES_API }/${ id }`, JournalEntriesService.defaultOptions)
      .map( (res: Response) => res.json() )
      .catch( error => this.handleError(error) );
  }

  private handleError(error: Response): Observable<any> {
    if (!environment.production) {
      console.error(`Journal Entries Service error: ${ error.json() }`);
    }
    return Observable.throw(error.json());
  }
}
