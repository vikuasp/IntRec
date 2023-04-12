import { Component,OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var window:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  navOpen: boolean = false;
  dropOpen: boolean = false;
  studentModal: any;
  ngOnInit(): void { 
    this.studentModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }
  
  NavbarOpen(){
    this.navOpen=!this.navOpen;
  }
  DropdownOpen(){
    this.dropOpen=!this.dropOpen;
  }

  openModal(){
    this.studentModal.show();
  }

  closeModal(){
    this.studentModal.hide();
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
}
