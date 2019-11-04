import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { Product } from 'src/app/models/product.model';
import { User } from  'src/app/models/user.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})



export class ProductListComponent implements OnInit {
	public allProductsId: number[] = [];
	public allProducts: Product[] = [];
	public newUser: User = {id_user: 1, login: 'qwerty', password: 'parol', full_name: 'ddd'};

	constructor(private apiService: ApiService) { }

	ngOnInit() {


		this.apiService.getAllProductsId().subscribe( (allProductsId: number[]) => {
	  		this.allProductsId = allProductsId;
	  		this.allProductsId.forEach( (productId)=>{
	  			this.apiService.getProductById(productId).subscribe( (product: Product) => {
	  				this.allProducts.push(product);
	  			});
	  		});
  		});
	}

}

