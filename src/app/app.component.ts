import { Component,OnInit } from '@angular/core';
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
}
