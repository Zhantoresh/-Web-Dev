import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  share(product: Product, platform: string) {
    const url = encodeURIComponent(product.productLink);
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${url}`, '_blank');
    } else if (platform === 'telegram') {
      window.open(`https://t.me/share/url?url=${url}`, '_blank');
    }
  }
  sharing(productId: number) {
    console.log(`Shared product with ID: ${productId}`);
  }
}
