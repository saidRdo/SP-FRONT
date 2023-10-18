import Axios from "@/hooks/Axios";

const fetchZones = async (cityId) => {
    try {
        const zones = await Axios.get(`/zones/city/${parseInt(cityId)}`);
        if (zones.data) {
            return zones.data;
        }

    } catch (error) {
        console.error("axios catch", error);
    }
};
export default fetchZones;