import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Users } from "../models/user.model";
import { AppSettings } from "../app.settings";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(
      `${AppSettings.API_ENDPOINT_USERS_GET}`
    );
  }

  addUser(user): Observable<Users> {
    return this.httpClient.post<Users>(
      AppSettings.API_ENDPOINT_USER_CREATE,
      user
    );
  }

  isEmailBusy(email: string): Observable<boolean> {
    return this.httpClient.get<boolean>(
      `${AppSettings.API_ENDPOINT_USER}/busy/email/${email}`
    );
  }
  isDocumentBusy(dni: string): Observable<boolean> {
    return this.httpClient.get<boolean>(
      `${AppSettings.API_ENDPOINT_USER}/busy/document/${dni}`
    );
  }

  updateItem(user: Users): Observable<Users> {
    return this.httpClient.put<Users>(
      `${AppSettings.API_ENDPOINT_USER_UPSERT}${user.email}`,
      user
    );
  }

  log(message: string) {
    return "UserService: " + message;
  }
}
