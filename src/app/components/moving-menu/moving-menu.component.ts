import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moving-menu',
  templateUrl: './moving-menu.component.html',
  styleUrls: ['./moving-menu.component.css']
})
export class MovingMenuComponent implements OnInit {
  @Output() onChanged = new EventEmitter<boolean>();


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  change() {
      this.onChanged.emit();
  }


}
