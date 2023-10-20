import axios from "axios";

const Axios=axios.create({
    baseURL:"http://localhost:8001/api/v1",
    headers: {
        'Accept': 'application/json',
    },
})
export default Axios;