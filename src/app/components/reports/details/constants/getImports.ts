import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../../dashboard/sidebar/sidebar.component';
import { HeaderComponent } from '../../../dashboard/header/header.component';
import { TableComponent } from '../../table/table.component';

export const getImports = [
  SidebarComponent,
  HeaderComponent,
  RouterOutlet,
  TableComponent,
];
