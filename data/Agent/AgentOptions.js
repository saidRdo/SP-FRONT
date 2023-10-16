import Axios from "@/hooks/Axios";

const AgentOptions = async () => {
    try {
        const agents = await Axios.get(`/agent`);
        if (agents.data) {
            const options = agents.data.map(agnt=>{
                return {value:agnt.id , label:agnt.user.username}
            });
            return options;
        }

    } catch (error) {
        console.error("axios catch", error);
    }
};
export default AgentOptions;