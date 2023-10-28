import Axios from "@/hooks/Axios";

export const CreateAgentController=async (data) => {
    //console.log(data)
    try {
        const addUser = await Axios.post("/user", data,{
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return addUser;
    } catch (e) {
        //console.error("create agent ax : ", e)
        return e;
    }
}