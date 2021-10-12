export class AuthDTO {
    user_id: string;
    access_token: string;
    username: string;
    password: string;
    constructor(
        user_id: string,
        access_token: string,
        username: string,
        password: string,
    ) {
        this.user_id = user_id;
        this.access_token = access_token;
        this.username = username;
        this.password = password;
    }
}