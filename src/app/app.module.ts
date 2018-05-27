import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  MatFormFieldModule,
  MatCardModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatInputModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatButtonModule,
  MatSnackBarModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CdkTableModule } from "@angular/cdk/table";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormComponent } from "./shared/components/form/form.component";
import { TopbarComponent } from "./shared/components/topbar/topbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { AppTableComponent } from "./shared/components/app-table/app-table.component";
import { MainComponent } from "./shared/components/main/main.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "./shared/services/user.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NotificationsService } from "./shared/services/notification.service";

@NgModule({
  exports: [
    CdkTableModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  imports: [
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: []
})
export class MaterialModule {}
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TopbarComponent,
    FooterComponent,
    AppTableComponent,
    MainComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
