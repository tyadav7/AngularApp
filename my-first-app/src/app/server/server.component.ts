import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 7;
  toggle: boolean = false;
  serverStatus: String;
  getServerStatus() : String{
     
    return this.serverStatus;
    /*
    if(this.toggle){
      this.toggle = !this.toggle;
      this.serverStatus = "offline";
      return this.serverStatus;
    }else{
      this.toggle = !this.toggle;
      this.serverStatus = "online";
      return this.serverStatus;
    } 
   
    this would return a changedetection error so just returning offline.
    */
  }

  constructor() { 

    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';

  }

  getColor(){
   return this.serverStatus === 'offline' ? 'red' : 'green';
  }

  ngOnInit() {
  }

}
