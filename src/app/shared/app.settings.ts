export class AppSettings {
  public static readonly APP_NAME = "Atlas Informática";
  public static readonly APP_VERSION = "0.0.2";
  public static readonly API_ENDPOINT = "//localhost:3000/";
  public static readonly API_ENDPOINT_USER = AppSettings.API_ENDPOINT + "user";

  public static readonly API_ENDPOINT_USER_CREATE = AppSettings.API_ENDPOINT_USER +
  "/create";
  public static readonly API_ENDPOINT_USER_UPSERT = AppSettings.API_ENDPOINT_USER +
  "/";
  public static readonly API_ENDPOINT_USERS_GET = AppSettings.API_ENDPOINT +
  "users";
  public static readonly API_ENDPOINT_GET_USER_ID = AppSettings.API_ENDPOINT_USERS_GET +
  "/:userId";

  public static readonly NAME_VALIDATION = /^(([a-zá-úA-ZÁ-Ú]{2,15}){1}(\s([a-zA-Z]{2,15}))+)$/;
  public static readonly DNI_VALIDATION = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
  public static readonly NIE_VALIDATION = /[XYZ][0-9]{1,7}[A-Z]/;

  public static readonly NOTIFICATIONS = {
    DEFAULT_TIME: 2000,
    EDITED_TIME: 5000
  };
}
