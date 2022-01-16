import { Component, OnInit, } from '@angular/core';
import { dataPeople } from '../../models/dataPeople';
import { dataSearch } from '../../models/dataSearch';
import { ServicesService } from '../../services.service';
import { NgForm, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { showPeople } from 'src/app/people.action';
import { selectPeoplesFeatureCount } from 'src/app/selector';
@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {
  title = 'CRUD Angular and Nodejs';
  showAllUsers: dataPeople[] = [];
 
  test : boolean = false;
  people$: Observable<dataPeople> = new Observable();
  dataSearchUsers: dataSearch = { searchers: '' };

  constructor(private service: ServicesService,
    private store: Store<{ people: any }>) { }

  searchTime = new FormControl('');

  ngOnInit(): void {
    this.getAllUsers();
    this.searchTime.valueChanges.subscribe(value => {
      if (value.length == 0) {
        this.getAllUsers();
      } else {
        this.runSeaerch(value);
      }
    });
  }

  getAllUsers() {
    this.service.getUsers().subscribe(res => {
      this.store.dispatch(showPeople(res));
     //this.people$ = this.store.select(selectPeoplesFeatureCount);
     //TODO: console.log(res)
      this.store.dispatch({ type: 'SET_PEOPLE', payload: res.msg });
      this.showAllUsers = res.msg;
    },
      err => {
        this.test = true;
        this.showAllUsers = []
      });
  }


  deleteUser(id: any) {
    const boolead = confirm('Esta seguro de eliminar este usuario?');
    if (boolead) {
      this.service.deleteUser(id).subscribe(res => {
        //TODO: console.log(res);
        return this.ngOnInit();
      });
    }

  }



  runSeaerch(data: string) {
    
    return this.service.search(data).subscribe(res => {
      if (res.DBAUser.length === 0) {
        this.service.getUsers().subscribe(res => {
         // console.log(res)
         this.test = true;
          this.showAllUsers = res.msg;
        },
          err => {
            this.showAllUsers = []
          });
      }
      this.showAllUsers = res.DBAUser;
      this.test = false;
    }, err => {
      console.log(err);
    });
  }

  search(form: NgForm) {
    return this.service.search(this.dataSearchUsers.searchers).subscribe(res => {
      if (res.DBAUser.length === 0) {
        
        this.service.getUsers().subscribe(res => {
          //console.log(res)
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

