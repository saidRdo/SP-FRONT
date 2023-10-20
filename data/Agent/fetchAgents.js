import Axios from "@/hooks/Axios";

const fetchAgent = async () => {
    try {
        const agents = await Axios.get(`/agent`);
        if (agents.data) {
            return agents.data.map(agent=>{
                    return {
                        id: agent.id,
                        username: agent?.user.username,
                        cin: agent?.user.code,
                        phone: agent?.user.phone,
                        picture:  agent?.user.picture,
                        email:  agent?.user.email,
                        city: "Casablanca", // Assuming this is constant for all agents
                        zone:  agent.zone.length>0 ? agent?.zone?.map(zone => zone.name) : "He has no zone",
                        zonesId: agent?.zone?.map(zone => zone.id),
                        created_at: agent?.user.createAt.split("T")[0].replace(/-/g, "/")
                    }
            });
        }

    } catch (error) {
        console.error("axios catch", error);
    }
};
export default fetchAgent;