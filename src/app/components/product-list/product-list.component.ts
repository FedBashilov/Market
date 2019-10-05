import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})



export class ProductListComponent implements OnInit {
	public allProductsId: number[] = [];
	public allProducts: Product[] = [];


	constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.apiService.getAllProductsId().subscribe((allProductsId: number[])=>{
	  		this.allProductsId = allProductsId;
	  		this.allProductsId.forEach( (productId)=>{
	  			this.apiService.getProductById(productId).subscribe((product: Product) => {
	  				this.allProducts.push(product);
	  			});
	  		});
	  		
  		});
	}

}

