import { UserCredentials } from "../models/userCredentials.model";

export const createUserCredentials = async (userId: string, password: string): Promise<any> => {
    var userCredentials = new UserCredentials();
    const userCredential = {
        userId: userId,
        password: password
    }

    const res = await userCredentials.create(userCredential);
    return res;
}