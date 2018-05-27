import { Injectable } from "@angular/core";
import { AppSettings } from "../app.settings";
import { MatSnackBar } from "@angular/material";
import { FormComponent } from "../components/form/form.component";
import { ReactiveFormsModule } from "@angular/forms";

@Injectable()
export class NotificationsService {
  constructor(public snackBar: MatSnackBar) {}

  showNotificationEdit(message: string, action: string, rForm) {
    this.snackBar
      .open(message, action, {
        duration: AppSettings.NOTIFICATIONS.DEFAULT_TIME
      })
      .onAction()
      .subscribe(() => {
        rForm.reset();
      });
  }
  showNotification(message: string, action: string, rForm) {
    this.snackBar.open(message, action, {
      duration: AppSettings.NOTIFICATIONS.DEFAULT_TIME
    });
    rForm.reset();
  }
}
