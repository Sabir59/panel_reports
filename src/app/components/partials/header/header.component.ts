import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MaxWidthWrapperComponent } from '../../shared/max-width-wrapper/max-width-wrapper.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, MaxWidthWrapperComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
