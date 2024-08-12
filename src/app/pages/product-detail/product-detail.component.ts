import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { Product } from '@app/models/product';
import { ProductsService } from '@app/services/products.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, SweetAlert2Module],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  route = inject(ActivatedRoute);
  productService = inject(ProductsService)
  id: string = '';
  product: Product = {
    calificacion: 0,
    categoria: '',
    description: '',
    id: '',
    imgUrl: '',
    name: '',
    price: 0
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.productService.getProductById(this.id).subscribe({
        next: (product) => {
          this.product = product;
        },
        error: () => {
          let _message = {
            title: 'Error',
            text: 'Ocurrio un error en el servicio'
          }
          Swal.fire({
            title: _message.title,
            text: _message.text,
            icon: 'info'
          });
        }
      });
    });
  }
}
