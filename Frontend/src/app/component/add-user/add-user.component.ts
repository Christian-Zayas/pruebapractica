import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { dataPeople } from 'src/app/models/dataPeople';
import { dataSend } from 'src/app/models/dataSend';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  dataUsers: dataSend = {
    names: '',
    lastNameFathers: '',
    lastNameMothers: '',
    Directions: '',
    numberphone: 0
  };


  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {

    
  }

  saveData(){


    if (this.dataUsers.names === '' || this.dataUsers.lastNameFathers === '' || this.dataUsers.lastNameMothers === '' || this.dataUsers.Directions === '' || this.dataUsers.numberphone === 0) {
      alert('Llene todos los campos');
    }else {
      this.service.createUser(this.dataUsers).subscribe(res => {
        console.log(res);
        this.router.navigate(['']);
      },
      err =>  this.router.navigate(['']))
    }
    

  }

  

}
