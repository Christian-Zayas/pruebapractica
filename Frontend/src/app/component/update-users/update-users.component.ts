import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { dataPeople } from '../../models/dataPeople';
import { dataSend } from 'src/app/models/dataSend';
import {ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {
  dataUsers: dataPeople = {
    name: '',
    lastNameFather: '',
    lastNameMother: '',
    Direction: '',
    phone: 0
  };
  constructor(private service: ServicesService,  
    private activatedRoute: ActivatedRoute,
    private router:  Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.printData(params['id']);
    })
    
  }

  printData(_id: string ) {
    this.service.getUser(_id).subscribe(res => {
      console.log(res.msg.name);
      this.dataUsers = res.msg;
    });
  }

  updateData(id: any) {  
    this.service.updateUser(id ,this.dataUsers).subscribe(res => {
      alert(res.msg);
      this.router.navigate(['/']);
    },
    error => {
      alert(`${error.error.msg}`);
    });
  }

}
