import dynamic from "next/dynamic";

const ZoneTab = () => {
    return (
        <h1>ZoneTap</h1>
    )
}
export default dynamic(() => Promise.resolve(ZoneTab), { ssr: false });