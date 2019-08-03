import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'market name';


  showOrHideMenu(){
    let menu: any = document.getElementsByClassName("menu")[0];
    let content: any = document.getElementsByClassName("content")[0];
    let curtain: any = document.getElementsByClassName("curtain")[0];
    let icon: any = document.getElementsByClassName("icon")[0];

    if(menu.classList.contains("show")){
      menu.classList.remove("show");
      content.classList.remove("moved");
      curtain.classList.remove("on");
      curtain.classList.add("off");
      icon.classList.remove("cross");
      icon.classList.add("burger");
    } else {
      menu.classList.add("show");
      content.classList.add("moved");
      curtain.classList.remove("off");
      curtain.classList.add("on");
      icon.classList.remove("burger");
      icon.classList.add("cross");
    }
  }
}
