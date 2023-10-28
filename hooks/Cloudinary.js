import axios from "axios";

const Cloudinary=axios.create({
    baseURL:"https://api.cloudinary.com/v1_1/dd4mrn9jy/image/upload",
    headers: {
        'Accept': 'application/json',
    },
})
export default Cloudinary;