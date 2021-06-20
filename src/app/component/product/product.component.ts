import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  selectedValue:any;
  selectedRadio:any;
  box:string[];
  radio=['Male','Female'];
  
  checkboxes=[{name:'pune',
    ischeck:false
  },
  {
    name:'mumbai',
    ischeck:false
  },
  {
    name:'abad',
    ischeck:false
    
}];
  
  public program=[
    {
      id:0,
      name:'java'
    },
    {
      id:1,
      name:'python'
    },
    {
      id:2,
        name:'Angular'
    },
    {
      id:3,
      name:'React Js'
    }
  ];
  public products=[
    {
      pid:101,
      pname:"Tv",
      price:10000,
      dics:10
    },
    {
      pid:102,
      pname:"Mobile",
      price:20000,
      dics:15
    },
    {
      pid:103,
      pname:"Laptop",
      price:50000,
      dics:0
    },
    {
      pid:104,
      pname:"Speakers",
      price:2000,
      dics:5
    },
  ];
  constructor() { 
    this.box=[];
  }

  ngOnInit(): void {
  }

  onSubmit(){
  console.log(this.selectedValue);
  console.log(this.program[this.selectedValue].name);
  console.log(this.selectedRadio);
  this.box.splice(0,this.box.length);
  this.checkboxes.forEach(element => {
    if(element.ischeck){
      this.box.push(element.name);
    }
  });
  console.log(this.box);
  
  
  }
  onCheck(i:any){
    let v=this.checkboxes[i];
    if(v.ischeck)
    {
      v.ischeck=false;
    }
    else
    {
      v.ischeck=true;
    }


  }


}
