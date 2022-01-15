import { Component, OnInit,  } from '@angular/core';
import { dataPeople } from '../../models/dataPeople';
import { dataSearch } from '../../models/dataSearch';
import { ServicesService } from '../../services.service';
import  {NgForm} from '@angular/forms';
@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {
  title = 'CRUD Angular and Nodejs'; 
  showAllUsers: dataPeople[] = [];
  aviso : string = "";

  dataSearchUsers: dataSearch = {
    searchers: '',
    
  };

  constructor(private service: ServicesService) { }


 

  ngOnInit(): void {
    this.service.getUsers().subscribe(res => { 
      console.log(res)
      this.showAllUsers = res.msg;
    },
    err => {
      this.showAllUsers = []
    });

  }

  deleteUser(id: any) {
    this.service.deleteUser(id).subscribe(res => {
      console.log(res);
      return this.ngOnInit();
      
    });
  }
  onSelect() {
    
    this.service.getUsers().subscribe(res => { 
      console.log(res)
      this.showAllUsers = res.msg;
    },
    err => {
      this.showAllUsers = []
    });
  }

  
  search(form : NgForm) {
    
    return this.service.search(this.dataSearchUsers.searchers).subscribe(res => {
      if(res.DBAUser.length === 0) {
       alert('No se encontro ningun usuario');
       this.service.getUsers().subscribe(res => { 
        console.log(res)
        this.showAllUsers = res.msg;
      },
      err => {
        this.showAllUsers = []
      });
      }
      this.showAllUsers = res.DBAUser;
    }, err => {
      console.log(err);
    });
  }
  
}

