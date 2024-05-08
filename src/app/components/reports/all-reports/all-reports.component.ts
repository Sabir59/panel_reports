import { Component } from '@angular/core';
import { SidebarComponent } from '../../dashboard/sidebar/sidebar.component';
import { HeaderComponent } from '../../dashboard/header/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Sites } from './types';
import { ReportsService } from '../../../services/reportSites';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-all-reports',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, RouterOutlet, RouterLink, NgFor],
  templateUrl: './all-reports.component.html',
  styleUrl: './all-reports.component.scss',
  providers: [ReportsService],
})
export class AllReportsComponent {
  sites!: Sites[];

  constructor(private reportServices: ReportsService) {}

  ngOnInit() {
    this.reportServices.getSitesCards().then((data) => {
      this.sites = data;
    });
  }
}
