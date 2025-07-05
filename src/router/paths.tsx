export class RouterPaths {
  static HOME = "/";
  static LOGIN = "/login";
  static SIGNUP = "/signup";
  static EDIT_MY_PROFILE = "/profile/me/edit";
  static EXPLORE = "/explore";
  static CREATE_ROOM = "/create-room";
  static MY_ROOMS = "/my-rooms";

  static ROOM(id: string | number) {
    return `/room/${id}`;
  }

  static PROFILE(id: string | number) {
    return `/profile/${id}`;
  }
}
