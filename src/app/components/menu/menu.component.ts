import { Component, OnInit, SimpleChanges, HostListener, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: any = [
    { id: 1, title: 'Home', isActive: true },
    { id: 2, title: 'My Requests', isActive: false },
    { id: 3, title: 'My Queries', isActive: false },
    { id: 4, title: 'Trade Compliance', isActive: false },
    { id: 5, title: 'References', isActive: false },
    { id: 6, title: 'FAQs', isActive: false }
  ];
  expandButton: boolean = true;
  @Output()flag = new EventEmitter<boolean>();
  expandMenu() {
    this.flag.emit(this.expandButton);
    this.expandButton = !this.expandButton;
  }
  changMenuFn(item) {
    this.menu.forEach(element => {
      if (element.id == item.id) {
        element.isActive = true;
      }
      else {
        element.isActive = false;
      }
    });
  }
  constructor() {
  }

  ngOnInit() {
  }


}
