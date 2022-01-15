import { Component, OnInit,  } from '@angular/core';
import { dataPeople } from '../../models/dataPeople';
import { dataSearch } from '../../models/dataSearch';
import { ServicesService } from '../../services.service';
import  {NgForm, FormControl} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private service: ServicesService ,  private toast: ToastrService) { }

  searchTime = new FormControl('');
 

  ngOnInit(): void {
    this.getAllUsers();
    
    this.searchTime.valueChanges.subscribe(value => {
      if(value.length == 0) {
        this.getAllUsers();
       
      }else {
     this.runSeaerch(value);
      }
      
    });
  }


  getAllUsers() {
    this.service.getUsers().subscribe(res => { 
      console.log(res)
      this.showAllUsers = res.msg;
    },
    err => {
      this.showAllUsers = []
    });
  }
  searchTimeChange(event : any) {
    console.log(event);
  }

  deleteUser(id: any) {
   const  boolead =  confirm('Esta seguro de eliminar este usuario?');
    if(boolead) {
      this.service.deleteUser(id).subscribe(res => {
        console.log(res);
        return this.ngOnInit(); 
      });
    }
    
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

  runSeaerch(data: string) {
    return this.service.search(data).subscribe(res => {
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
  
  search(form: NgForm) {
    
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

