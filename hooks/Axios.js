import axios from "axios";

const Axios=axios.create({
    baseURL:"http://127.0.0.1:8000/api/v1",
    headers: {
        'Accept': 'application/json',
    },
})
export default Axios;