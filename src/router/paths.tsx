export class RouterPaths {
  static HOME = "/";
  static LOGIN = "/login";
  static SIGNUP = "/signup";
  static PROFILE = "/profile";

  static PROFILE_ID(id: string | number) {
    return `${RouterPaths.PROFILE}/${id}`;
  }
}
