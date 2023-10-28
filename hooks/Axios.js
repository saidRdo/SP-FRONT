import axios from "axios";

const Axios=axios.create({
    baseURL:"http://54.193.180.3:8001/api/v1",
    headers: {
        'Accept': 'application/json',
    },
})
export default Axios;