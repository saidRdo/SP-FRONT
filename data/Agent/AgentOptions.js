import axios from "axios";

const AgentOptions = async () => {
    try {
        const agents = await axios.get(`http://localhost:8001/api/v1/agent`);
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