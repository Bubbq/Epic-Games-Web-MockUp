import axios from "axios";//how to fetch api/http requests

export default axios.create({//creating an axios instance w a custom configuration
    baseURL: 'https://api.rawg.io/api',//link from rawg.io api->games->get url
    params:{//parameters
        key:'',//the link we got from rawg.io to have acess to game data
    }
})
//exporting it bc we'll need it in other components
