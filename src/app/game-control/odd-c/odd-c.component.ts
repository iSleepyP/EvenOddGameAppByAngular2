import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-odd-c',
  templateUrl: './odd-c.component.html',
  styleUrls: ['./odd-c.component.css']
})
export class OddCComponent {
  @Input() number:number;

}
