export class RouterPaths {
  static HOME = "/";
  static LOGIN = "/login";
  static SIGNUP = "/signup";
  static PROFILES = "/profiles";

  static PROFILE_ID(id: string | number) {
    return `${RouterPaths.PROFILES}/${id}`;
  }
}
