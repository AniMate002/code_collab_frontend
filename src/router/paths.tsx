export class RouterPaths {
    static HOME = "/";
    static PROFILES = "/profiles";

    static PROFILE_ID(id: string | number){
        return `${RouterPaths.PROFILES}/${id}`;
    }
}