import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {
  date:Date = new Date();
  date0:Date = new Date();
  minDate:String = "";
  maxDate:String = "";
  constructor() { }
  ionViewWillEnter(){
    this.date = new Date();
    this.date0 = new Date();
    this.date0.setMonth(this.date.getMonth()+3);
    this.minDate = "";
    this.maxDate = "";
    if(this.date.getMonth()+1 < 10){
      this.minDate += this.date.getFullYear() + "-" + "0" + (this.date.getMonth()+1) + "-" + this.date.getDate();
    }else{
      this.minDate += this.date.getFullYear() + "-" + (this.date.getMonth()+1) + "-" + this.date.getDate();
    }  
    if(this.date0.getMonth()+1 < 10){
      this.maxDate += this.date0.getFullYear() + "-" + "0" + (this.date0.getMonth()+1) + "-" + this.date0.getDate();
    }else{
      this.maxDate += this.date0.getFullYear() + "-" + (this.date0.getMonth()+1) + "-" + this.date0.getDate();
    }  
  }
  ngOnInit() {
  }

}
