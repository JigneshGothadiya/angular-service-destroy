import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  showComp1: boolean = true;
  showComp2: boolean = true;
constructor(private router: Router){

}

  exitMain(){
    this.router.navigate(['','root']);
  }

}
