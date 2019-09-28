import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	public products: Array<Product> = [];

	constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.apiService.getProducts().subscribe((products: Product[])=>{
	  		this.products = products;
  		})
	}

}
