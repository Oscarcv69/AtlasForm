import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { AppTableDataSource } from "./app-table-datasource";

import { UserService } from "../../services/user.service";
import { HttpClient } from "@angular/common/http";
import { Users } from "../../models/user.model";
import { Observable, of as observableOf, merge } from "rxjs";
@Component({
  selector: "app-table",
  templateUrl: "./app-table.component.html",
  styleUrls: ["./app-table.component.css"]
})
export class AppTableComponent implements OnInit {
  dataSource = new AppTableDataSource(this.userService);
  displayedColumns = [
    "name",
    "email",
    "document",
    "subscribe",
    "captation",
    "country",
    "region",
    "city",
    "address",
    "zipcode",
    "observations"
  ];

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {}
}
