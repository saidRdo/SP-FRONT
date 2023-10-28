import {AboutMe} from "@/sub-components";
import EmailSetting from "../../settings/EmailSetting";
import {Col} from "react-bootstrap";
import dynamic from "next/dynamic";

const Overview = ({lang,user,updateSession,session}) => {
    return (
        <Col xl={12} lg={12} md={12} xs={12}>
            <AboutMe user={user?.admin} updateSession={updateSession} session={session} lang={lang}/>
            <EmailSetting user={user} lang={lang}/>
        </Col>
    )
}
export default dynamic(() => Promise.resolve(Overview), { ssr: false });