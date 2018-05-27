import { AppSettings } from "../app.settings";

describe("init constant", () => {
  describe("should return the value", () => {
    it("when init the constant has the value correct", () => {
      expect(AppSettings.API_ENDPOINT_USERS_GET).toBe("//localhost:3000/users");
      expect(AppSettings.API_ENDPOINT).toBe("//localhost:3000/");
      expect(AppSettings.API_ENDPOINT_USER).toBe("//localhost:3000/user");
      expect(AppSettings.API_ENDPOINT_USER_CREATE).toBe(
        "//localhost:3000/user/create"
      );
      expect(AppSettings.API_ENDPOINT_USER_UPSERT).toBe(
        "//localhost:3000/user/"
      );
      expect(AppSettings.API_ENDPOINT_GET_USER_ID).toBe(
        "//localhost:3000/users/:userId"
      );
      expect(AppSettings.API_ENDPOINT_USERS_GET).toBe("//localhost:3000/users");
    });
  });
});
