import { Component } from '@angular/core';

@Component({
  selector: 'app-hmp-academy',
  standalone: true,
  imports: [],
  templateUrl: './hmp-academy.component.html',
  styleUrl: './hmp-academy.component.scss'
})
export class HmpAcademyComponent {
  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
