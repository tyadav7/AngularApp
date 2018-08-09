import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-assignment',
  templateUrl: './directives-assignment.component.html',
  styleUrls: ['./directives-assignment.component.css']
})
export class DirectivesAssignmentComponent implements OnInit {

  flag:boolean = false;
  array = [];
  count:number = 0;
  onClick(){
    this.flag = !this.flag;
    this.array.push(new Date());
    ++this.count;
  }

  constructor() { }

  ngOnInit() {
  }

}
