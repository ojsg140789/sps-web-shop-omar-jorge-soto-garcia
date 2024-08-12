import { inject, Injectable } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore } from '@angular/fire/firestore';
import { Product } from '@app/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  firestore = inject(Firestore);

  constructor() {}

  getProducts(): Observable<Product[]> {
    const productsCollection = collection(this.firestore, 'products');
    return collectionData(productsCollection, { idField: 'id' });
  }

  getTaskById(id: string): Observable<Product> {
    const taskDocRef = doc(this.firestore, `products/${id}`);
    return docData(taskDocRef, { idField: 'id' });
  }

}
