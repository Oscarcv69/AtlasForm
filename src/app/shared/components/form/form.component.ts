import { Component, OnInit } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  countries = [
    { id: 1, name: "Andalucía" },
    { id: 2, name: "Aragón" },
    { id: 3, name: "Islas Baleares" },
    { id: 4, name: "Cataluña" },
    { id: 5, name: "Canarias" },
    { id: 6, name: "Cantabria" },
    { id: 7, name: "Castilla-La Mancha" },
    { id: 8, name: "Castilla y León" },
    { id: 9, name: "Comunidad de Madrid" },
    { id: 10, name: "Comunidad Foral de Navarra" },
    { id: 11, name: "Comunidad Valenciana" },
    { id: 12, name: "Extremadura" },
    { id: 13, name: "Galicia" },
    { id: 14, name: "País Vasco" },
    { id: 15, name: "Principado de Asturias" },
    { id: 16, name: "Región de Murcia" },
    { id: 17, name: "La Rioja" }
  ];

  captations = [
    { id: "telf", name: "Telefónica" },
    { id: "web", name: "Web" },
    { id: "pres", name: "Presencial" }
  ];
  subs = [{ id: "yes", name: "Si" }, { id: "no", name: "No" }];

  constructor() {}
  ngOnInit() {}
}
