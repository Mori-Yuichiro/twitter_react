import axios from "axios";

export const AuthHook = () => {
    const BASEURL = 'http://localhost:3000';
    const signUp = async (params) => {
        const response = await axios.post(`${BASEURL}/api/v1/users`, params);
        console.log(response);
    }

    return { signUp };
}