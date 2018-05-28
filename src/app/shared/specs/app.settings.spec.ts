import { AppSettings } from "../app.settings";

describe("init constant", () => {
  describe("should return the value", () => {
    it("when init the constant has the value correct", () => {
      const expected = {
        getUsers: "//localhost:3000/users",
        endpoint: "//localhost:3000/",
        endpointUser: "//localhost:3000/user",
        endpointUserCreate: "//localhost:3000/user/create",
        endpointUserUpsert: "//localhost:3000/user/",
        endpointUserId: "//localhost:3000/users/:userId"
      };

      expect(AppSettings.API_ENDPOINT_USERS_GET).toBe(expected.getUsers);
      expect(AppSettings.API_ENDPOINT).toBe(expected.endpoint);
      expect(AppSettings.API_ENDPOINT_USER).toBe(expected.endpointUser);
      expect(AppSettings.API_ENDPOINT_USER_CREATE).toBe(
        expected.endpointUserCreate
      );
      expect(AppSettings.API_ENDPOINT_USER_UPSERT).toBe(
        expected.endpointUserUpsert
      );
      expect(AppSettings.API_ENDPOINT_GET_USER_ID).toBe(
        expected.endpointUserId
      );
    });
  });
});
