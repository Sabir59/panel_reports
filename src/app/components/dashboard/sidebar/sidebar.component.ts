import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { getImportsIcons } from './constants/getImports';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIconComponent, RouterLink, CommonModule],
  viewProviders: [
    provideIcons({
      ...getImportsIcons,
    }),
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  toggleSidebar: boolean = false;
  toggleDropdown: Record<string, boolean> = {
    reports: false,
    users: false,
    help: false,
  };

  dropdownToggleHandler(targetDropdown: string): void {
    const updatedStates: Record<string, boolean> = {};
    updatedStates[targetDropdown] = !this.toggleDropdown[targetDropdown];

    Object.keys(this.toggleDropdown).forEach((key) => {
      if (key !== targetDropdown) {
        updatedStates[key] = false;
      }
    });
    this.toggleDropdown = updatedStates;
  }

  toggleSidebarState(): void {
    console.log(this.toggleSidebar);
    this.toggleSidebar = !this.toggleSidebar;
  }
}
