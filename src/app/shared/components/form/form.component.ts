import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { UserService } from "../../services/user.service";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppSettings } from "../../app.settings";
import { User } from "../../models/user.model";
import { NotificationsService } from "../../services/notification.service";
import { AppTableDataSource } from "../app-table/app-table-datasource";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  hasEntry: Boolean = false;
  regions = [{ id: "Andalucia", name: "Andalucía" }];

  cities = [
    { id: "Malaga", name: "Málaga" },
    { id: "Cadiz", name: "Cádiz" },
    { id: "Granada", name: "Granada" }
  ];

  countries = [{ id: "Espana", name: "España" }];

  captations = [
    { id: "Telefonica", name: "Telefónica" },
    { id: "Web", name: "Web" },
    { id: "Presencial", name: "Presencial" }
  ];
  subs = [{ id: "Si", name: "Si" }, { id: "No", name: "No" }];

  rForm: FormGroup;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onCreated: EventEmitter<User> = new EventEmitter<User>();

  appDatatable: AppTableDataSource;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private notificationsService: NotificationsService
  ) {}
  ngOnInit(): void {
    this.createForm();
    this.onChangeEmail();
    this.onChangeDocument();
  }
  private createForm() {
    this.rForm = this.fb.group(
      {
        name: [
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern(AppSettings.NAME_VALIDATION)
          ])
        ],
        email: [
          "",
          Validators.compose([Validators.required, Validators.email])
        ],
        dni: [
          "",
          Validators.compose([Validators.required, this.validateInput])
        ],
        captation: [],
        subscribe: [],
        address: [],
        zipcode: ["", Validators.compose([Validators.required])],
        region: [],
        city: [],
        country: [],
        observations: []
      },
      { updateOn: "blur" }
    );
  }
  public createUser() {
    const user: User = {
      name: this.rForm.get("name").value,
      email: this.rForm.get("email").value,
      document: this.rForm.get("dni").value,
      subscribe: this.rForm.get("subscribe").value,
      captation: this.rForm.get("captation").value,
      address: this.rForm.get("address").value,
      zipcode: this.rForm.get("zipcode").value,
      region: this.rForm.get("region").value,
      city: this.rForm.get("city").value,
      country: this.rForm.get("country").value,
      observations: this.rForm.get("observations").value
    };
    this.userService
      .updateItem(user)
      .subscribe(() =>
        this.notificationsService.showNotification(
          "Creación: El usuario ha sido creado",
          "Cerrar",
          this.rForm
        )
      );
    this.refreshData();
  }

  public userEditedEmail(email: string) {
    if (this.hasEntry === false) {
      this.hasEntry = true;
      const user$ = this.userService.isFieldEditEmail(email);
      user$.subscribe(users =>
        users.forEach(user => {
          this.rForm.controls["name"].setValue(user.name);
          this.rForm.controls["dni"].setValue(user.document);
          this.rForm.controls["subscribe"].setValue(user.subscribe);
          this.rForm.controls["captation"].setValue(user.captation);
          this.rForm.controls["address"].setValue(user.address);
          this.rForm.controls["zipcode"].setValue(user.zipcode);
          this.rForm.controls["region"].setValue(user.region);
          this.rForm.controls["city"].setValue(user.city);
          this.rForm.controls["country"].setValue(user.country);
          this.rForm.controls["observations"].setValue(user.observations);
        })
      );
    }
  }

  public userEditedDocument(document: string) {
    if (this.hasEntry === false) {
      this.hasEntry = true;
      const user$ = this.userService.isFieldEditDocument(document);
      user$.subscribe(users =>
        users.forEach(user => {
          this.rForm.controls["name"].setValue(user.name);
          this.rForm.controls["email"].setValue(user.email);
          this.rForm.controls["subscribe"].setValue(user.subscribe);
          this.rForm.controls["captation"].setValue(user.captation);
          this.rForm.controls["address"].setValue(user.address);
          this.rForm.controls["zipcode"].setValue(user.zipcode);
          this.rForm.controls["region"].setValue(user.region);
          this.rForm.controls["city"].setValue(user.city);
          this.rForm.controls["country"].setValue(user.country);
          this.rForm.controls["observations"].setValue(user.observations);
        })
      );
    }
  }

  public hasError(formField: string, validators: string[]): boolean {
    return (
      this.rForm.controls[formField].touched &&
      validators.some(validator =>
        this.rForm.controls[formField].hasError(validator)
      )
    );
  }
  public validateInput(fc: FormControl) {
    const NIC_REGEX_OLD = AppSettings.DNI_VALIDATION;
    const NIC_REGEX_NEW = AppSettings.NIE_VALIDATION;

    return NIC_REGEX_OLD.test(fc.value) || NIC_REGEX_NEW.test(fc.value)
      ? null
      : {
          validateInput: {
            valid: false
          }
        };
  }
  private onChangeEmail(): void {
    this.rForm.get("email").valueChanges.subscribe((email: string) => {
      this.userService.isEmailBusy(email).subscribe(isBusy => {
        if (isBusy) {
          this.userEditedEmail(this.rForm.get("email").value);
          this.hasEntry = false;
          this.notificationsService.showNotificationEdit(
            "Alerta: ¿Desea editar el usuario?",
            "No",
            this.rForm,
            this.hasEntry
          );
        }
      });
    });
  }
  private onChangeDocument(): void {
    this.rForm.get("dni").valueChanges.subscribe((document: string) => {
      this.userService.isDocumentBusy(document).subscribe(isBusy => {
        if (isBusy) {
          this.notificationsService.showNotificationEdit(
            "Alerta: ¿Desea editar el usuario?",
            "No",
            this.rForm,
            this.hasEntry
          );
          this.userEditedDocument(this.rForm.get("dni").value);
        }
      });
    });
  }
  private refreshData(): void {
    window.location.reload();
  }
}
