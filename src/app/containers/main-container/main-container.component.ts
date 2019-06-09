import { Component } from '@angular/core';
import { IControl } from '../../components/controls/controls.component';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent {
  public controls: IControl[] = [
    {
      path: '/info',
      icon: 'info'
    }
  ];

  constructor(public timerService: TimerService) {}

  public onPressedCircle() {
    this.timerService.toggleStart({ defaultLimit: 5, breakLimit: 5, maxScore: 8 });
  }
}
