export class RouterPaths {
  static HOME = "/";
  static LOGIN = "/login";
  static SIGNUP = "/signup";
  static EDIT_MY_PROFILE = "/profile/me/edit";

  static PROFILE(id: string | number) {
    return `/profile/${id}`;
  }
}
