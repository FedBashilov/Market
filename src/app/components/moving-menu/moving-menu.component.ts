import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-moving-menu',
  templateUrl: './moving-menu.component.html',
  styleUrls: ['./moving-menu.component.css']
})
export class MovingMenuComponent implements OnInit {
  @Output() onChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }



  change() {
      this.onChanged.emit();
  }


}
