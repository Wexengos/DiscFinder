// Arquivo onde é inicializado o axios

import axios from "axios";

const api = axios.create({
    baseURL: "https://api.discogs.com",
    headers: {
        Authorization: "Discogs token=lPTOruJYLmPnDSqWmliozzuVvaCqMNPJXXQdpmNf"
    }
   });
   
   export default api