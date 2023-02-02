import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastnumber = 0;
  @Output() Resultnumber = new EventEmitter<number>();

  onStartGame(){
    this.interval=setInterval(()=>{
      this.intervalFired.emit(this.lastnumber+1);
      this.lastnumber++;
    },1000);
  }

  onPauseGame(){
    clearInterval(this.interval);
  }

  onStopGame(){
    clearInterval(this.interval);
    this.Resultnumber.emit(this.lastnumber+1);
    this.lastnumber = 0;
  }
}
