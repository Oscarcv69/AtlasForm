import { Component, OnInit } from "@angular/core";
import { AppSettings } from "../../app.settings";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.css"]
})
export class TopbarComponent implements OnInit {
  appname = AppSettings.APP_NAME;

  constructor() {}

  ngOnInit() {}
}
