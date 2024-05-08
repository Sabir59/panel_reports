import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getImports } from './constants/getImports';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [...getImports],
})
export class DetailsComponent implements OnInit {
  id: string = '';

  constructor(private route: ActivatedRoute, private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'] || ''; // Set default value if id is undefined
    });
  }
}
