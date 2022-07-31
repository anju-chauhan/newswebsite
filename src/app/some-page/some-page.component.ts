import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbSidebarService,NbIconConfig, NbComponentSize } from '@nebular/theme';

@Component({
  selector: 'app-some-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './some-page.component.html',
  styleUrls: ['./some-page.component.css']
})
export class SomePageComponent implements OnInit {
	fruits=['kk','hh','ff','gg','ee','xx','kk','hh','ff','gg','ee','xx','kk','hh','ff','gg','ee','xx','kk','hh','ff','gg','ee','xx'];
  
  toggleChecked = false;

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
},  {title: 'this is the title', 
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
},  {title: 'this is the title', 
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
    bellIconConfig: NbIconConfig = { icon: 'bell-outline', pack: 'eva' };
    sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
  constructor(private sidebarService: NbSidebarService) {
  }


  ngOnInit(): void {
    // this.sidebarService.toggle(false, 'left');
  }

toggle() {
    this.sidebarService.toggle(false, 'left');
  }


  // toggleCompact() {
  //   this.sidebarService.toggle(true, 'right');
  // }
}
