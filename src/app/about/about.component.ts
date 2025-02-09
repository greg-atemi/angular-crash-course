import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit{
  
  constructor(
    private service: ProductService
  ) {}

  // ngOnInit(): void {
  //   this.service.getAllProductsWithLimit()
  //     .subscribe({
  //       next: (data) => {
  //         console.log(data);
  //       }
  //     });
  // }

  ngOnInit(): void {
      const product: ProductRepresentation = {
        title: "My Product",
        description: "Nice Product",
        category: "ALL",
        image: "http://fake-product-image.png",
        price: 12
      }

      this.service.createProduct(product).subscribe({
        next: (result) => {
          console.log(result);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        }
      })
  }
}
