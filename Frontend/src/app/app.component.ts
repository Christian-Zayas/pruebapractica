import { Component , OnInit } from '@angular/core';
import { dataPeople } from './models/dataPeople';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD Angular and Nodejs'; 
  showAllUsers: dataPeople[] = [];
  constructor(private service: ServicesService) { }
  ngOnInit() {
      // this.service.getUser('61de4a2a3e257e27b057be20').subscribe(res => console.log(res));
  }

}




