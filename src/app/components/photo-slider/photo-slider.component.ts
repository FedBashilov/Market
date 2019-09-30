import { Component, Input, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-photo-slider',
  templateUrl: './photo-slider.component.html',
  styleUrls: ['./photo-slider.component.css']
})
export class PhotoSliderComponent implements OnInit {

  @Input() product: Product ;

  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }

  pressed(e){
  	console.log("pressed");
  }
}
