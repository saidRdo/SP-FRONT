import Axios from "@/hooks/Axios";

export const UpdateProfileController=async (data,accessToken) => {
    //console.log(data)
    try {
        const UpdateUser = await Axios.patch("/user/profileUpdate",data,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            });
        return UpdateUser;
    } catch (e) {
        //console.error("create agent ax : ", e)
        return e;
    }
}