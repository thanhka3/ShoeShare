import { UserCredentials } from "../models/userCredentials.model";

export const createUserCredentials = async (userId: string, password: string) => {
    var userCredentials = new UserCredentials();
    const userCredential = {
        userId: userId,
        password: password
    }

    await UserCredentials.create(userCredential)
        .then(res => { return res })
        .catch(err => console.log(err));
}