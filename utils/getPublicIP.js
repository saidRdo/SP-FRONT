const publicIp = require('public-ip');

const getPublicIP = async () => {
    try {
        const ipAddress = await publicIp.v4();
        return ipAddress;
    } catch (error) {
        console.error('Error getting public IP address:', error);
        return null;
    }
};

export default getPublicIP;
