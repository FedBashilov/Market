import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'market name';


  showOrHideMenu(){
    console.log("aaaa");
    let menu: any = document.getElementsByClassName("menu")[0];
    let content: any = document.getElementsByClassName("content")[0];
    if(menu.classList.contains("show")){
      menu.classList.remove("show");
      content.classList.remove("moved");
    } else {
      menu.classList.add("show");
      content.classList.add("moved");
    }
  }
}
