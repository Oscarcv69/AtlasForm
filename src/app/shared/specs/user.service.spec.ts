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
    it("should return an Observable<User[]>", () => {
      const params = { message: "has been created" };
      const expected = { messageExpected: `UserService: ${params.message}` };

      const logTest = userService.log(params.message);

      expect(logTest).toBe(expected.messageExpected);
    });
  });
  describe("#getUsers", () => {
    it("should return an Observable<User[]>", () => {
      userService.getUsers().subscribe(users => {
        expect(users.length).toBe(2);
      });
    });
    it("should return an Observable<User[]>", () => {
      userService.getUsers().subscribe(users => {
        expect(userService.getUsers).toHaveBeenCalled();
      });
    });
  });
  describe("#isBusyEmail", () => {
    it("should return an Observable<User[]>", () => {
      const email = "fake@fake.com";
      userService.isEmailBusy(email).subscribe(users => {
        expect(users).toBeTruthy();
      });
    });
  });
  describe("#isBusyDni", () => {
    it("should return an Observable<User[]>", () => {
      const dni = "12345678A";
      userService.isDocumentBusy(dni).subscribe(users => {
        expect(users).toBeTruthy();
      });
    });
  });
});