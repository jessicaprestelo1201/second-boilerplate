import User from "./User.js"
class UsersRepository {
    constructor() {
        this.users = []
    }

    //primeiro metodo http
    getALLUsers() {
        return this.users;
    }
    addUser(name,email,password){
        const newUser = new User(name,email,password)

        this.users.push(newUser);

        return newUser;
    }
getUserById(id){
    const user = this.users.find(u => u.id == id)

    return user;
}
}

export default UsersRepository;