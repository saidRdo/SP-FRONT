import axios from "axios";

const Axios=axios.create({
    baseURL:"http://54.176.19.230:8001/api/v1",
    headers: {
        'Accept': 'application/json',
    },
})
export default Axios;