import { Component } from '@angular/core';
import { SidebarComponent } from '../dashboard/sidebar/sidebar.component';
import { HeaderComponent } from '../dashboard/header/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Sites } from './types';
import { ReportsService } from '../../services/reportSites';
import { NgFor } from '@angular/common';
import { AllReportsComponent } from './all-reports/all-reports.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    RouterOutlet,
    RouterLink,
    NgFor,
    AllReportsComponent,
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
  providers: [ReportsService],
})
export class ReportsComponent {
  sites!: Sites[];

  constructor(private reportServices: ReportsService) {}

  ngOnInit() {
    this.reportServices.getSitesCards().then((data) => {
      this.sites = data;
    });
  }
}
