import { apiUrl } from ".";


export const getquizes = async () => {
    const request = await fetch (`${apiUrl}/quizes`, {
        // mode: 'no-cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        },
    });
    if(request.ok){
        const res = await request.json();
        return res.quizes;
    }
}