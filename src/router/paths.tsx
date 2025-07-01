export class RouterPaths {
  static HOME = "/";
  static LOGIN = "/login";
  static SIGNUP = "/signup";
  static EDIT_MY_PROFILE = "/profile/me/edit";
  static EXPLORE = "/explore";

  static PROFILE(id: string | number) {
    return `/profile/${id}`;
  }
}
