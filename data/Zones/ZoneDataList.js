import Axios from "@/hooks/Axios";

const fetchZones = async (cityId, options = {}) => {
    const { fetchOnce } = options;

    try {
        const zones = await Axios.get(`/zones/city/${parseInt(cityId)}`);
        if (zones.data) {

            localStorage.setItem(`zones-${cityId}`, JSON.stringify(zones.data));
            return zones.data;
        }

    } catch (error) {
        console.error("axios catch", error);
    }

    return JSON.parse(localStorage.getItem(`zones-${cityId}`));
};
export default fetchZones;