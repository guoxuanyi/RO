import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RO';
  flag:boolean;
  onVoted(event){
    this.flag = event;
  }
  ngOnInit(): void {
  }
}
