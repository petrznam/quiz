import { apiUrl } from ".";


export const getQuizes = async () => {
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

export const getQuiz = async (id) => {
    const request = await fetch (`${apiUrl}/quizes/${id}`, {
        // mode: 'no-cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if(request.ok){
        const res = await request.json();
        return res.quiz;
    }
}