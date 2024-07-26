import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

products:products[]=[
  {pname:"Mobile",qty:20,price:4000},
  {pname:"TV",qty:10,price:6000},
  {pname:"Laptop",qty:20,price:8000},
  {pname:"Desktop",qty:70,price:5000}
]

}
