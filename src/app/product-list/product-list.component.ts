import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];

  ngOnInit(): void {
    
  }
}
