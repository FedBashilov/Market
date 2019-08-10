import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	public productList: Array<Product> = [
		{ productName: "Batman", prize: 228, discription: "Пажилой бэд гай", imgSrc: "/assets/products/batman1.jpg", productId: 0}, 
		{ productName: "Skate", prize: 1488, discription: "Стальной кикфлинт", imgSrc: "assets/products/skate1.jpg", productId: 1}, 
		{ productName: "Ballerina", prize: 7777, discription: "You spin me right round, baby Right round like a record, baby Right round round round", imgSrc: "assets/products/ballerina1.jpg", productId: 2}, 
	];

	 constructor() { }

	 ngOnInit() {
	 }

}
