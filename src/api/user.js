import { apiUrl } from ".";


export const signup = async (data) => {
    const request = await fetch (`${apiUrl}/register`, {
        // mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(data)
    });
    return request.ok;
}


export const signin = async (data) => {
    const request = await fetch (`${apiUrl}/auth/`, {
        // mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(data)
    });
    return request.ok;
}