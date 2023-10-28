import dynamic from "next/dynamic";

const CapteurTab = () => {
    return (
        <h1> Capteur </h1>
    )
}
export default dynamic(() => Promise.resolve(CapteurTab), { ssr: false });
