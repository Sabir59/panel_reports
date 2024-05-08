import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReportssService {
  private apiUrl =
    'https://raw.githubusercontent.com/Sabir59/dashboard-api/main/reports.json';

  constructor(private http: HttpClient) {}

  async getReports() {
    try {
      const data = await this.http.get<any>(this.apiUrl).toPromise();
      return data;
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  }
}
