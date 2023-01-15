import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cheasy';
  test = {
    param1: 'test',
    param2: 'test2',
    param3: 'test3',
    param4: 'test',
    param5: 'test',
  };
}
