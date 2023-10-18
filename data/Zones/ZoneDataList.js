import axios from "axios";

const fetchZones = async (cityId) => {
    try {
        const zones = await axios.get(`http://localhost:8001/api/v1/zones/city/${parseInt(cityId)}`);
        if (zones.data) {
            return zones.data;
        }

    } catch (error) {
        console.error("axios catch", error);
    }
};
export default fetchZones;