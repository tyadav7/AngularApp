import { Component, OnInit } from '@angular/core';

@Component({
  //selector : '[app-servers] <div app-servers></div>
  //selector : '.app-servers <div class ="app-servers"></div> # or :hover doesnt work with angular
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverName: String = '';
  serverCreationStatus: String;
  flag:boolean = false;

  constructor() { 
    setTimeout(() => {
        this.allowNewServer = true;
    }, 2000);  


  }

  ngOnInit() {
  }

  setServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onServerCreated(){
    this.flag = true;
    this.serverCreationStatus = this.serverName; 
  }

}
