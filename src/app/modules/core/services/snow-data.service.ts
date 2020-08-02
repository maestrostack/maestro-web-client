import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SnowDataService {

  constructor(
    private http: HttpClient,
  ) { }

  getTableRecords(table, query, limit) {
    console.log(table)

    console.log(query)
    let url = `/api/now/table/${table}?sysparm_limit=${limit}&sysparm_query=${query}&sysparm_display_value=true`;

    console.log(url);
    // make an api call. Treat the "HttpClient" service just as you would the standard Http service.
    return(this.http.get<any>(url));
  }

  getTableRecord(table, sys_id) {
    console.log(table)
    let records: any;
    // make an api call. Treat the "HttpClient" service just as you would the standard Http service.
    return(this.http.get<any>(`/api/now/table/${table}?sys_id=${sys_id}&sysparm_display_value=true`));
  }

  createRecord(table, data) {
    // make an api call. Treat the "HttpClient" service just as you would the standard Http service.
    return(this.http.post<any>(`/api/now/table/${table}`, data));
  }
}
