import axios from "axios";

const Axios=axios.create({
    baseURL:"http://172.31.18.81:8000/api/v1",
    headers: {
        'Accept': 'application/json',
    },
})
export default Axios;