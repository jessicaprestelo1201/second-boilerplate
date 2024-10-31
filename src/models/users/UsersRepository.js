import User from "./User.js"
class UsersRepository {
    constructor() {
        this.users = []
    }

    //primeiro metodo http
    getALLUsers() {
        return this.users;
    }
}

export default UsersRepository;