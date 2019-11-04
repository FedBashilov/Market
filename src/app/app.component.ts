import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  audioFlag: boolean = false;

  constructor(private router: Router) {
  }

  moveContent(){
    let content: any = document.getElementsByClassName("content")[0];
    if( content.classList.contains("moved") ){
      content.classList.remove("moved");
    } else {
      content.classList.add("moved");
    }
  }

}
