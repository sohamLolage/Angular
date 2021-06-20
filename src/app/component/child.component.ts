import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() empName: string
  @Output() send: EventEmitter<string> = new EventEmitter<string>();
  msg: string = "Not found";
  empa = [
    {
      id: 1,
      name: "Amit"
    },
    {
      id: 2,
      name: "Pavan"
    },
    {
      id: 3,
      name: "Rakesh"
    },
    {
      id: 4,
      name: "Rohit"
    },
  ]
  constructor() {
    this.empName = "";

  }

  ngOnInit(): void {
    console.log(this.empName);
  }
  onClick() {
    this.msg = "Not Found";
    for (let e of this.empa) {

      if (e.name === this.empName) {
        this.msg = "Emp found";
        break;

      }
    }

    this.send.emit(this.msg);
  }

}
