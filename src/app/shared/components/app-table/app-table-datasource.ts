import { DataSource } from "@angular/cdk/collections";
import { MatPaginator, MatSort } from "@angular/material";
import { map } from "rxjs/operators";
import { Observable, of as observableOf, merge } from "rxjs";
import { OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { HttpClient } from "@angular/common/http";
import { Users } from "../../models/user.model";
export class AppTableDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<Users[]> {
    return this.userService.getUsers();
  }

  disconnect() {}
}
