import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  message='Test @Input decorator';
  text:string='';

  recieveData(msg:any){
    this.text=msg;
  }
}
