import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ans',
  templateUrl: './ans.component.html',
  styleUrls: ['./ans.component.css']
})
export class AnsComponent {
    @Input() ans:string;
    @Input() number:number;
}
