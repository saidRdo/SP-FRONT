import Axios from "@/hooks/Axios";

export const CreateZoneController=async (data,accessToken) => {
    //console.log(data)
    try {
        const addZone = await Axios.post("/zones", data,{
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return addZone;
    } catch (e) {
        //console.error("create agent ax : ", e)
        return e;
    }
}