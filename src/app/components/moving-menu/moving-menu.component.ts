import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moving-menu',
  templateUrl: './moving-menu.component.html',
  styleUrls: ['./moving-menu.component.css']
})
export class MovingMenuComponent implements OnInit {
  @Output() onChanged = new EventEmitter<boolean>();


  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  change() {
      this.onChanged.emit();
  }

  setCurrent(indexOfChosen: number){
    let current: any = document.getElementsByClassName("current")[0];
    let chosen: any = document.getElementsByClassName("line_menu_item")[indexOfChosen];
    current.classList.remove("current");
    chosen.classList.add("current");
  }

  showOrHideMenu(){
    let movingMenu: any = document.getElementsByClassName("moving_menu")[0];
    let curtain: any = document.getElementsByClassName("curtain")[0];
    let lineHeader: any = document.getElementsByClassName("line-header")[0];
    let icon: any = document.getElementsByClassName("icon")[0];

    if(movingMenu.classList.contains("show")){
      movingMenu.classList.remove("show");
      lineHeader.classList.remove("moved");
      curtain.classList.remove("on");
      curtain.classList.add("off");
      icon.classList.remove("cross");
      icon.classList.add("burger");
    } else {
      movingMenu.classList.add("show");
      lineHeader.classList.add("moved");
      curtain.classList.remove("off");
      curtain.classList.add("on");
      icon.classList.remove("burger");
      icon.classList.add("cross");
    }

     this.change();
  }

}
