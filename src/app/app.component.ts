import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evenodd';
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];
  ans:string;
  num:number;

  onIntervalFired(fireNumber:number){
    this.num=fireNumber;
      console.log(fireNumber);
      if(fireNumber % 2 === 0){
          this.evenNumbers.push(fireNumber);
      }
      else{
        this.oddNumbers.push(fireNumber);
      }
  }

  checkAns(ans:number){
    if(ans % 2 === 0){
      this.ans= "EVEN";
  }
  else{
    this.ans= "ODD";
  }
  }
}
