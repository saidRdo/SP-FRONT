import Axios from "@/hooks/Axios";

const fetchZones = async (cityId,accessToken) => {
    try {
        const zones = await Axios.get(`/zones/city/${parseInt(cityId)}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        //console.log(zones)
        if (zones.data) {
            return zones.data;
        }
    } catch (error) {
        console.error("axios catch", error);
    }
};
export default fetchZones;