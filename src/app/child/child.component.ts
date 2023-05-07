import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // count: number =5;

  // @Output()
  //  countChanged:EventEmitter<number> = new EventEmitter<number>();

  //  increment(){
  //    this.count++;
  //    this.countChanged.emit(this.count);
  //  }
  //  decrement(){
  //    this.count--;
  //    this.countChanged.emit(this.count);
  //  }

  count=0;
  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }




   constructor() { }

  ngOnInit(): void {
  }

}
