import { Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBell } from '@ng-icons/heroicons/outline';
import { AuthService } from '../../../auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  viewProviders: [
    provideIcons({
      heroBell,
    }),
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  authService = inject(AuthService);
  user?: any;

  ngOnInit() {
    this.authService.getCurrentUser().subscribe((result) => {
      console.log(result);
      this.user = result;
    });
  }
  logout() {
    this.authService.logout();
  }
}
