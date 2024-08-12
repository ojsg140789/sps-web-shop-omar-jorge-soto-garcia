import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '@app/services/products.service';
import { Product } from '@app/models/product';
import { ProductItemComponent } from "../../components/product-item/product-item.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  products: Product[] = [];

  producstsService = inject(ProductsService);

  ngOnInit() {
    this.producstsService.getProducts().subscribe(products => {
      this.products = products;
      console.log('this.products', this.products);
    });
  }

}
