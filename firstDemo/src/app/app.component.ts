import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'firstDemo';
  imageUrl='../assets/londonclock.jpeg';
  message='welcome to Mumbai';
  name:string='';

  onButtonClick() {
    this.message='welcome to Delhi'
    }
}
