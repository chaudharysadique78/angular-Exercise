import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
 
 @Input() msg='';

 childmsg:string="Test @Output decorator";

 @Output()
 send:EventEmitter<string>=new EventEmitter<string>();

 sendToChild(){
   this.send.emit(this.childmsg);
 }

}
