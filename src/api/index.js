const serverApiUrl = "http://185.185.71.218:3000";
const localApiUrl = "http://localhost:3000";

const mode = "DEBUG";

export const apiUrl = (mode === "DEBUG") ? localApiUrl : serverApiUrl;