import { TestBed, getTestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { UserService } from "../services/user.service";
import { AppSettings } from "../app.settings";

describe("UsersService", () => {
  let userService: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    userService = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });
  describe("#Log method", () => {
    it("should return a message>", () => {
      const params = { message: "has been created" };
      const expected = { messageExpected: `UserService: ${params.message}` };

      const logTest = userService.log(params.message);

      expect(logTest).toBe(expected.messageExpected);
    });
  });
  describe("#getUsers user", () => {
    it("should return an Observable<User[]>", () => {
      const userServ = getTestBed().get(UserService);
      userService.getUsers().subscribe(actualUsers => {
        expect(actualUsers.length).toBe(1);
        expect(actualUsers[0].name).toEqual("oscar");
      });
    });
    it("should return if getUsers have been called>", () => {
      userService.getUsers().subscribe(users => {
        expect(userService.getUsers).toHaveBeenCalled();
      });
    });
  });
  describe("#isBusyEmail", () => {
    it("should return if email is busy>", () => {
      const email = "fake@fake.com";
      userService.isEmailBusy(email).subscribe(users => {
        console.log(users);
        expect(users).toBeFalsy();
      });
    });
  });
  describe("#isBusyDni", () => {
    it("should return if document is busy>", () => {
      const dni = "12345678A";
      userService.isDocumentBusy(dni).subscribe(users => {
        expect(users).toBeTruthy();
      });
    });
  });
});
