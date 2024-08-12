import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Product } from '@app/models/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() item!: Product;
  faStar = faStar;

 
}
