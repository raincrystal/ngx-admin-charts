import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@NgModule({
  imports: [
    HttpClientModule,
  ],
})

export class QualityService {
  constructor(private httpClient: HttpClient) { }

  public getQualities(): Observable<any>  {
    return this.httpClient.get<any>(`http://localhost:8080/service/project/quality`);
  }
}
