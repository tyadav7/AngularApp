import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    if(this.username.length > 0){
      this.flag = false;
    }
  }

  username:String = '';
  flag:boolean = true;
  title = 'assignments';

  onkeyPress():void{
    this.flag = false;
    if(this.username.length <= 1){
      this.flag = true;
    }
  }

  onClick():void{
    this.flag = true;
    this.username = '';
  }
}
