export class RouterPaths {
  static HOME = "/";
  static LOGIN = "/login";
  static SIGNUP = "/signup";

  static PROFILE(id: string | number) {
    return `/profile/${id}`;
  }
}
