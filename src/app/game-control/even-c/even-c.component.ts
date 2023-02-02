import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-even-c',
  templateUrl: './even-c.component.html',
  styleUrls: ['./even-c.component.css']
})
export class EvenCComponent {
    @Input() number:number;


}
