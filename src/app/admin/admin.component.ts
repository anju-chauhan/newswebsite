import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title= '';
  description= '';
  dateTimePicker: any;

  news=[
  {title: 'this is the title', 
  description: `A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
    Originally, nebula was a name for any diffuse astronomical object,
    including galaxies beyond the Milky Way. A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
    Originally, nebula was a name for any diffuse astronomical object,
    including galaxies beyond the Milky Way.
    A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
    Originally, nebula was a name for any diffuse astronomical object,
    including galaxies beyond the Milky Way. `,
    date: '12-44-344',
    isBreakingNews: false,

}
  ];


  checked = false;


  constructor() { }
  ngOnInit(): void {
  }

  toggle(checked: boolean) {
    this.checked = checked;
  }
  submit() {
   this.news.push({
   	title: this.title,
   	description: this.description,
   	date: this.dateTimePicker,
   	isBreakingNews: this.checked 
   })
  }

}
