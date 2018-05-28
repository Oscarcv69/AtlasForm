import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { AppSettings } from "../app.settings";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${AppSettings.API_ENDPOINT_USERS_GET}`);
  }

  addUser(user): Observable<User> {
    return this.httpClient.post<User>(
      AppSettings.API_ENDPOINT_USER_CREATE,
      user
    );
  }

  isFieldEditEmail(email: string): Observable<User[]> {
    return this.httpClient.get<User[]>(
      `${AppSettings.API_ENDPOINT_USERS_GET}/${email}`
    );
  }

  isFieldEditDocument(document: string): Observable<User[]> {
    return this.httpClient.get<User[]>(
      `${AppSettings.API_ENDPOINT_USERS_GET}/document/${document}`
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

  updateItem(user: User): Observable<User> {
    return this.httpClient.put<User>(
      `${AppSettings.API_ENDPOINT_USER_UPSERT}${user.email}`,
      user
    );
  }

  log(message: string) {
    return "UserService: " + message;
  }
}
