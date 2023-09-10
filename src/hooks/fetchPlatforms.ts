import fetchData from "./fetchData"

interface Platform{//the shape of each platform, the .get function in our generaic http request hook will need to know the typing
    id: number
    name: string
    slug:string
}

const fetchPlatforms = () => fetchData<Platform>('/platforms/lists/parents')//calls the fetchData function, tells teh hook the data will be of type Platform (defined above)

export default fetchPlatforms;//exporting so other comp can acess the results of this function