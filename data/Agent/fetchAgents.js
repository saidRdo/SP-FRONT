import axios from "axios";

const fetchAgent = async () => {
    try {
        const agents = await axios.get(`http://54.176.19.230:8000/api/v1/zones`);
        if (agents.data) {
            const groupedData = agents.data.reduce((result, zone) => {
                const agentId = zone.agent.id;

                if (!result[agentId]) {
                    result[agentId] = [];
                }

                result[agentId].push(zone);

                return result;
            }, {});

            const transformedData = Object.values(groupedData).map(zones => {
                const agent = zones[0].agent.user; // Assuming all zones for an agent have the same user details

                return {
                    id: agent.id,
                    username: agent.username,
                    picture: agent.picture,
                    email: agent.email,
                    city: "Casablanca", // Assuming this is constant for all agents
                    zone: zones.map(zone => zone.name),
                    zonesId:zones.map(zone => zone.id),
                    created_at: agent.createAt.split("T")[0].replace(/-/g, "/")
                };
            });
            return transformedData;
        }

    } catch (error) {
        console.error("axios catch", error);
    }
};
export default fetchAgent;