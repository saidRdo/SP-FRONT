import Axios from "@/hooks/Axios";

export const UpdatePasswordController=async (data,accessToken) => {
    //console.log(data)
    try {
        const UpdatePassword = await Axios.patch("/auth/updatePassword",data,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            });
        return UpdatePassword;
    } catch (e) {
        //console.error("create agent ax : ", e)
        return e;
    }
}