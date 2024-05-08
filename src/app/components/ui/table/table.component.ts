import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './service';
import { getImports } from './fixtures/getImport';
import { NgFor } from '@angular/common';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [...getImports, NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [ProductService],
})
export class TableComponent {
  products!: Product[];

  cols!: Column[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
    ];
  }
}
