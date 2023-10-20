import Axios from "@/hooks/Axios";

export const CreateZoneController=async (data) => {
    //console.log(data)
    try {
        const addZone = await Axios.post("/zones", data);
        return addZone;
    } catch (e) {
        //console.error("create agent ax : ", e)
        return e;
    }
}